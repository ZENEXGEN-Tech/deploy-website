export const validEmail =
  process.env.NEXT_PUBLIC_EMAIL_ADDRESSS || "MASAKNKLASA";

export function isAdminEmail(email: string | undefined): boolean {
  console.log("Email: CONTAINS ADMIN EMAIL?", email);

  if (!email) return false;

  // Get admin emails from environment variable
  const adminEmailsString = validEmail || "";
  const adminEmails = adminEmailsString
    .split(",")
    .map((e) => e.trim().toLowerCase());

  return adminEmails.includes(email.toLowerCase());
}

// For backward compatibility, but prefer using isAdminEmail function
export function checkAdminAccess(email: string | undefined): boolean {
  return isAdminEmail(email);
}
