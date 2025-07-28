import { ContactEmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, inquiryType, message } = body;

    const { data, error } = await resend.emails.send({
      from: "ZENEXGEN Contact <onboarding@resend.dev>", // Replace with your verified domain
      to: ["masabmbz5@gmail.com"], // Replace with your actual email
      cc: [email], // Send a copy to the person who submitted
      subject: `New Contact Form Submission - ${inquiryType}`,
      react: ContactEmailTemplate({
        name,
        email,
        company,
        inquiryType,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
