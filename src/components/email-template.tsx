import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  inquiryType: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  company,
  inquiryType,
  message,
}: ContactEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "40px 30px",
          textAlign: "center" as const,
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            margin: "0",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          New Contact Form Submission
        </h1>
        <p
          style={{
            color: "#e2e8f0",
            margin: "10px 0 0 0",
            fontSize: "16px",
          }}
        >
          From ZENEXGEN Website
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "40px 30px" }}>
        {/* Contact Information */}
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              color: "#1a202c",
              fontSize: "20px",
              marginBottom: "20px",
              borderBottom: "2px solid #e2e8f0",
              paddingBottom: "10px",
            }}
          >
            Contact Information
          </h2>

          <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#4a5568",
                  width: "120px",
                }}
              >
                Name:
              </td>
              <td style={{ padding: "8px 0", color: "#2d3748" }}>{name}</td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#4a5568",
                }}
              >
                Email:
              </td>
              <td style={{ padding: "8px 0", color: "#2d3748" }}>
                <a
                  href={`mailto:${email}`}
                  style={{ color: "#667eea", textDecoration: "none" }}
                >
                  {email}
                </a>
              </td>
            </tr>
            {company && (
              <tr>
                <td
                  style={{
                    padding: "8px 0",
                    fontWeight: "bold",
                    color: "#4a5568",
                  }}
                >
                  Company:
                </td>
                <td style={{ padding: "8px 0", color: "#2d3748" }}>
                  {company}
                </td>
              </tr>
            )}
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#4a5568",
                }}
              >
                Inquiry Type:
              </td>
              <td style={{ padding: "8px 0", color: "#2d3748" }}>
                <span
                  style={{
                    backgroundColor: "#e2e8f0",
                    padding: "4px 12px",
                    borderRadius: "16px",
                    fontSize: "14px",
                    color: "#2d3748",
                  }}
                >
                  {inquiryType}
                </span>
              </td>
            </tr>
          </table>
        </div>

        {/* Message */}
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              color: "#1a202c",
              fontSize: "20px",
              marginBottom: "15px",
              borderBottom: "2px solid #e2e8f0",
              paddingBottom: "10px",
            }}
          >
            Message
          </h2>
          <div
            style={{
              backgroundColor: "#f7fafc",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              lineHeight: "1.6",
              color: "#2d3748",
            }}
          >
            {message.split("\n").map((line, index) => (
              <p key={index} style={{ margin: "0 0 10px 0" }}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center" as const,
            padding: "20px",
            backgroundColor: "#f7fafc",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <p style={{ margin: "0 0 15px 0", color: "#4a5568" }}>
            Reply directly to this email or contact them at:
          </p>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-block",
              backgroundColor: "#667eea",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Reply to {name}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#2d3748",
          padding: "20px 30px",
          textAlign: "center" as const,
          borderRadius: "0 0 8px 8px",
        }}
      >
        <p
          style={{
            color: "#a0aec0",
            margin: "0",
            fontSize: "14px",
          }}
        >
          This email was sent from the ZENEXGEN contact form
        </p>
        <p
          style={{
            color: "#718096",
            margin: "5px 0 0 0",
            fontSize: "12px",
          }}
        >
          DHA Phase 8, Al Murtaza Commercial, Karachi, Pakistan
        </p>
      </div>
    </div>
  );
}
