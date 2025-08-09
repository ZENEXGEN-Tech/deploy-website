// convex/lib/auth.ts
import { UserIdentity } from "convex/server";

/**
 * Get admin emails from environment variables
 */
function getAdminEmails(): string[] {
  const adminEmailsString = "masabmbz5@gmail.com,mashal@zenexgen.com";

  console.log(adminEmailsString, "ADMIN FRO ENV");

  if (!adminEmailsString) {
    console.warn("No admin emails configured in environment variables");
    return [];
  }

  return adminEmailsString
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email.length > 0);
}

/**
 * Check if an email is authorized as admin
 */
export function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;

  const adminEmails = getAdminEmails();
  console.log(adminEmails);

  return adminEmails.map((e) => e.toLowerCase()).includes(email.toLowerCase());
}

/**
 * Verify user authentication and admin authorization
 * Throws error if not authenticated or not authorized
 */
export async function requireAdmin(ctx: any): Promise<UserIdentity> {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new Error("Not authenticated");
  }

  if (!isAdminEmail(identity.email)) {
    throw new Error("Not authorized - Admin access required");
  }

  return identity;
}
