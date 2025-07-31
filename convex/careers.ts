import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-+$/, "");
}

// Get all careers (public)
export const getAllCareers = query({
  args: {
    isActive: v.optional(v.boolean()),
    department: v.optional(v.string()),
    type: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { isActive = true, department, type, limit }) => {
    let query = ctx.db.query("careers");

    let careers = await query.collect();

    // Filter by department if provided
    if (department && department !== "All") {
      careers = careers.filter((career) => career.department === department);
    }

    // Filter by type if provided
    if (type && type !== "All") {
      careers = careers.filter((career) => career.type === type);
    }

    // Sort by creation date (newest first)
    careers.sort((a, b) => b.createdAt - a.createdAt);

    // Apply limit if provided
    if (limit) {
      careers = careers.slice(0, limit);
    }

    return careers;
  },
});

// Get career by slug (public)
export const getCareerBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const career = await ctx.db
      .query("careers")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    return career;
  },
});

// Get career by ID (admin)
export const getCareerById = query({
  args: { id: v.id("careers") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

// Get featured careers (public)
export const getFeaturedCareers = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit = 6 }) => {
    const careers = await ctx.db
      .query("careers")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    // Sort by creation date (newest first)
    careers.sort((a, b) => b.createdAt - a.createdAt);

    return careers.slice(0, limit);
  },
});

// Get departments with count
export const getDepartments = query({
  args: {},
  handler: async (ctx) => {
    const careers = await ctx.db
      .query("careers")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();

    const departmentCounts: Record<string, number> = {};

    careers.forEach((career) => {
      departmentCounts[career.department] =
        (departmentCounts[career.department] || 0) + 1;
    });

    const departments = Object.entries(departmentCounts).map(
      ([name, count]) => ({
        name,
        count,
      })
    );

    // Add "All" option
    const totalCount = careers.length;
    departments.unshift({ name: "All", count: totalCount });

    return departments;
  },
});

// Create career (admin)
export const createCareer = mutation({
  args: {
    title: v.string(),
    department: v.string(),
    location: v.string(),
    type: v.string(),
    salary: v.optional(v.string()),
    description: v.string(),
    requirements: v.array(v.string()),
    responsibilities: v.array(v.string()),
    benefits: v.array(v.string()),
    isActive: v.boolean(),
    featured: v.boolean(),
    applicationDeadline: v.optional(v.number()),
    experienceLevel: v.string(),
    remoteAllowed: v.boolean(),
  },
  handler: async (ctx, args) => {
    const slug = generateSlug(args.title);

    // Check if slug already exists
    const existingCareer = await ctx.db
      .query("careers")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    if (existingCareer) {
      throw new ConvexError("A career with this title already exists");
    }

    const now = Date.now();

    return await ctx.db.insert("careers", {
      ...args,
      slug,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update career (admin)
export const updateCareer = mutation({
  args: {
    id: v.id("careers"),
    title: v.string(),
    department: v.string(),
    location: v.string(),
    type: v.string(),
    salary: v.optional(v.string()),
    description: v.string(),
    requirements: v.array(v.string()),
    responsibilities: v.array(v.string()),
    benefits: v.array(v.string()),
    isActive: v.boolean(),
    featured: v.boolean(),
    applicationDeadline: v.optional(v.number()),
    experienceLevel: v.string(),
    remoteAllowed: v.boolean(),
  },
  handler: async (ctx, { id, ...args }) => {
    const existingCareer = await ctx.db.get(id);
    if (!existingCareer) {
      throw new ConvexError("Career not found");
    }

    let slug = existingCareer.slug;

    // Regenerate slug if title changed
    if (args.title !== existingCareer.title) {
      slug = generateSlug(args.title);

      // Check if new slug already exists (for different career)
      const careerWithSlug = await ctx.db
        .query("careers")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first();

      if (careerWithSlug && careerWithSlug._id !== id) {
        throw new ConvexError("A career with this title already exists");
      }
    }

    return await ctx.db.patch(id, {
      ...args,
      slug,
      updatedAt: Date.now(),
    });
  },
});

// Delete career (admin)
export const deleteCareer = mutation({
  args: { id: v.id("careers") },
  handler: async (ctx, { id }) => {
    const career = await ctx.db.get(id);
    if (!career) {
      throw new ConvexError("Career not found");
    }

    return await ctx.db.delete(id);
  },
});

// Submit job application
export const submitApplication = mutation({
  args: {
    careerId: v.id("careers"),
    fullName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    resumeUrl: v.optional(v.string()),
    coverLetter: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Verify career exists and is active
    const career = await ctx.db.get(args.careerId);
    if (!career || !career.isActive) {
      throw new ConvexError("Career position not found or not active");
    }

    return await ctx.db.insert("applications", {
      ...args,
      status: "pending",
      appliedAt: Date.now(),
    });
  },
});

// Get applications for a career (admin)
export const getApplicationsForCareer = query({
  args: { careerId: v.id("careers") },
  handler: async (ctx, { careerId }) => {
    return await ctx.db
      .query("applications")
      .withIndex("by_career", (q) => q.eq("careerId", careerId))
      .collect();
  },
});
