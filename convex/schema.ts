import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Admin users table
  admins: defineTable({
    email: v.string(),
    password: v.string(), // In production, this should be hashed
    name: v.string(),
    role: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  // Blog posts table
  blogs: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(), // Markdown content
    category: v.string(),
    tags: v.array(v.string()),
    author: v.string(),
    readTime: v.string(),
    published: v.boolean(),
    featured: v.boolean(),
    imageUrl: v.optional(v.string()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  // Career positions table
  careers: defineTable({
    title: v.string(),
    slug: v.string(),
    department: v.string(),
    location: v.string(),
    type: v.string(), // Full-time, Part-time, Internship, Contract
    salary: v.optional(v.string()),
    description: v.string(), // Markdown content
    requirements: v.array(v.string()),
    responsibilities: v.array(v.string()),
    benefits: v.array(v.string()),
    isActive: v.boolean(),
    featured: v.boolean(),
    applicationDeadline: v.optional(v.number()),
    experienceLevel: v.string(), // Entry, Mid, Senior, Executive
    remoteAllowed: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_active", ["isActive"])
    .index("by_department", ["department"])
    .index("by_type", ["type"])
    .index("by_featured", ["featured"]),

  // Blog categories table
  blogCategories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    color: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_slug", ["slug"]),

  // Job applications (optional for future use)
  applications: defineTable({
    careerId: v.id("careers"),
    fullName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    resumeUrl: v.optional(v.string()),
    coverLetter: v.optional(v.string()),
    status: v.string(), // pending, reviewing, interview, rejected, hired
    appliedAt: v.number(),
  })
    .index("by_career", ["careerId"])
    .index("by_status", ["status"]),
});
