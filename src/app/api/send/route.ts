import { ContactEmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { ipRateLimit, emailRateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);
const isDev = process.env.NODE_ENV === "development";

function log(level: "info" | "warn" | "error", message: string, data?: any) {
  const timestamp = new Date().toISOString();

  if (isDev) {
    console.log(
      `[${timestamp}] ${level.toUpperCase()}: ${message}`,
      data || ""
    );
  } else {
    // Minimal, safe logging in production
    if (level === "error") {
      console.error(`[${timestamp}] ERROR: ${message}`);
    } else if (level === "warn") {
      console.warn(`[${timestamp}] WARN: ${message}`);
    }
    // No info logs in production
  }
}

function hashForLog(data: string): string {
  if (isDev) return data;
  return data.substring(0, 3) + "***" + data.slice(-2);
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfIP = request.headers.get("cf-connecting-ip");

  if (isDev) {
    console.log("🔍 IP Detection:", { forwarded, realIP, cfIP });
  }

  if (cfIP) return cfIP;
  if (forwarded) return forwarded.split(",")[0].trim();
  if (realIP) return realIP;
  return request.headers.get("x-forwarded-for") || "unknown";
}

function detectSpam(name: string, message: string, email: string) {
  const highRiskKeywords = [
    "crypto",
    "bitcoin",
    "loan",
    "prize",
    "winner",
    "urgent",
    "click here",
    "verify account",
    "suspended account",
    "act now",
    "limited time",
    "viagra",
    "cialis",
    "casino",
    "gambling",
    "get rich",
    "make money fast",
  ];

  const content = `${name} ${message} ${email}`.toLowerCase();
  const foundKeywords = highRiskKeywords.filter((keyword) =>
    content.includes(keyword)
  );

  return {
    isSpam: foundKeywords.length > 0,
    keywordCount: foundKeywords.length,
    // Don't log actual keywords in production
    keywords: isDev ? foundKeywords : [],
  };
}

export async function POST(request: NextRequest) {
  const requestId = Math.random().toString(36).substring(7); // Simple request ID
  const startTime = Date.now();

  try {
    log("info", `Contact form submission started [${requestId}]`);

    const clientIP = getClientIP(request);
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);
    const { name, email, company, inquiryType, message } = validatedData;

    log(
      "info",
      `Data validated successfully [${requestId}]`,
      isDev
        ? {
            name: name.substring(0, 20),
            email,
            inquiryType,
            messageLength: message.length,
          }
        : undefined
    );

    // IP Rate Limiting
    const ipResult = await ipRateLimit.limit(clientIP);
    if (!ipResult.success) {
      log(
        "warn",
        `IP rate limit exceeded [${requestId}] IP: ${hashForLog(clientIP)}`
      );
      return Response.json(
        {
          error: "Too many requests from this IP address",
          resetTime: ipResult.reset,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": ipResult.limit.toString(),
            "X-RateLimit-Remaining": ipResult.remaining.toString(),
            "X-RateLimit-Reset": ipResult.reset.toString(),
            "Retry-After": Math.round(
              (ipResult.reset - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // Email Rate Limiting
    const emailResult = await emailRateLimit.limit(email.toLowerCase());
    if (!emailResult.success) {
      log(
        "warn",
        `Email rate limit exceeded [${requestId}] Email: ${hashForLog(email)}`
      );
      return Response.json(
        {
          error: "Too many submissions from this email address",
          resetTime: emailResult.reset,
        },
        { status: 429 }
      );
    }

    // Spam Detection
    const spamResult = detectSpam(name, message, email);
    if (spamResult.isSpam) {
      log(
        "warn",
        `Spam detected [${requestId}] Keywords: ${spamResult.keywordCount}`
      );
      return Response.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Send Email
    const { data, error } = await resend.emails.send({
      from: `ZENEXGEN Contact ${process.env.EMAIL_DOMAIN}`,
      to: [`${process.env.EMAIL_RECIEVER}`],
      replyTo: email,
      subject: `Contact Form: ${inquiryType} - ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        company,
        inquiryType,
        message,
      }),
    });

    if (error) {
      log("error", `Email sending failed [${requestId}]: ${error.message}`);
      return Response.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    const processingTime = Date.now() - startTime;
    log(
      "info",
      `Email sent successfully [${requestId}] Time: ${processingTime}ms`
    );

    return Response.json({
      message: "Message sent successfully!",
      id: data?.id,
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    log(
      "error",
      `Contact form error [${requestId}]: ${error instanceof Error ? error.message : "Unknown error"} Time: ${processingTime}ms`
    );

    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
