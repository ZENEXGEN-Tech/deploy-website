import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

// Create default admin (run this once)
export const createDefaultAdmin = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if admin already exists
    const existingAdmin = await ctx.db
      .query("admins")
      .withIndex("by_email", (q) => q.eq("email", "admin@zenexgen.com"))
      .first();

    if (existingAdmin) {
      return { message: "Admin already exists" };
    }

    // Create default admin
    const adminId = await ctx.db.insert("admins", {
      email: "admin@zenexgen.com",
      password: "admin123", // In production, hash this password
      name: "Admin User",
      role: "super_admin",
      createdAt: Date.now(),
    });

    return { message: "Default admin created", adminId };
  },
});

// Admin login
export const loginAdmin = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, { email, password }) => {
    const admin = await ctx.db
      .query("admins")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!admin || admin.password !== password) {
      throw new ConvexError("Invalid credentials");
    }

    // Return admin info (excluding password)
    return {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    };
  },
});

// Verify admin session
export const verifyAdmin = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, { email }) => {
    const admin = await ctx.db
      .query("admins")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!admin) {
      return null;
    }

    return {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    };
  },
});
