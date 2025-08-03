import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { requireAdmin } from "./lib/auth";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-+$/, "");
}

// Get all blogs (public)
export const getAllBlogs = query({
  args: {
    published: v.optional(v.boolean()),
    category: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { published = true, category, limit }) => {
    let query = ctx.db.query("blogs");

    let blogs = await query.collect();

    // Filter by category if provided
    if (category) {
      blogs = blogs.filter((blog) => blog.category === category);
    }

    // Sort by creation date (newest first)
    blogs.sort((a, b) => b.createdAt - a.createdAt);

    // Apply limit if provided
    if (limit) {
      blogs = blogs.slice(0, limit);
    }

    return blogs;
  },
});

// Get blog by slug (public)
export const getBlogBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const blog = await ctx.db
      .query("blogs")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    return blog;
  },
});

// Get blog by ID (admin)
export const getBlogById = query({
  args: { id: v.id("blogs") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

// Get featured blogs (public)
export const getFeaturedBlogs = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit = 3 }) => {
    const blogs = await ctx.db
      .query("blogs")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .filter((q) => q.eq(q.field("published"), true))
      .collect();

    // Sort by creation date (newest first)
    blogs.sort((a, b) => b.createdAt - a.createdAt);

    return blogs.slice(0, limit);
  },
});

// Get blog categories
export const getBlogCategories = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("blogCategories").collect();
  },
});

// Create blog (admin)
export const createBlog = mutation({
  args: {
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    author: v.string(),
    readTime: v.string(),
    published: v.boolean(),
    featured: v.boolean(),
    imageUrl: v.optional(v.string()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    const slug = generateSlug(args.title);

    // Check if slug already exists
    const existingBlog = await ctx.db
      .query("blogs")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    if (existingBlog) {
      throw new ConvexError("A blog with this title already exists");
    }

    const now = Date.now();

    return await ctx.db.insert("blogs", {
      ...args,
      slug,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update blog (admin)
export const updateBlog = mutation({
  args: {
    id: v.id("blogs"),
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    author: v.string(),
    readTime: v.string(),
    published: v.boolean(),
    featured: v.boolean(),
    imageUrl: v.optional(v.string()),
    seoTitle: v.optional(v.string()),
    seoDescription: v.optional(v.string()),
  },
  handler: async (ctx, { id, ...args }) => {
    // Require admin authentication
    await requireAdmin(ctx);

    const existingBlog = await ctx.db.get(id);
    if (!existingBlog) {
      throw new ConvexError("Blog not found");
    }

    let slug = existingBlog.slug;

    // Regenerate slug if title changed
    if (args.title !== existingBlog.title) {
      slug = generateSlug(args.title);

      // Check if new slug already exists (for different blog)
      const blogWithSlug = await ctx.db
        .query("blogs")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first();

      if (blogWithSlug && blogWithSlug._id !== id) {
        throw new ConvexError("A blog with this title already exists");
      }
    }

    return await ctx.db.patch(id, {
      ...args,
      slug,
      updatedAt: Date.now(),
    });
  },
});

// Delete blog (admin)
export const deleteBlog = mutation({
  args: { id: v.id("blogs") },
  handler: async (ctx, { id }) => {
    // Require admin authentication
    await requireAdmin(ctx);

    const blog = await ctx.db.get(id);
    if (!blog) {
      throw new ConvexError("Blog not found");
    }

    return await ctx.db.delete(id);
  },
});

// Create blog category (admin)
export const createBlogCategory = mutation({
  args: {
    name: v.string(),
    description: v.optional(v.string()),
    color: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Require admin authentication
    await requireAdmin(ctx);

    const slug = generateSlug(args.name);

    // Check if category already exists
    const existing = await ctx.db
      .query("blogCategories")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    if (existing) {
      throw new ConvexError("Category already exists");
    }

    return await ctx.db.insert("blogCategories", {
      ...args,
      slug,
      createdAt: Date.now(),
    });
  },
});
