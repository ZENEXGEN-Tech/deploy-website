import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { BlogDetailClient } from "./BlogDetailClient";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slug = id;

  try {
    const preloadedPost = await preloadQuery(api.blogs.getBlogBySlug, { slug });

    const { fetchQuery } = await import("convex/nextjs");
    const post = await fetchQuery(api.blogs.getBlogBySlug, { slug });

    if (!post || !post.published) {
      notFound();
    }

    const preloadedRelatedPosts = await preloadQuery(api.blogs.getAllBlogs, {
      published: true,
      category: post.category,
    });

    return (
      <BlogDetailClient
        preloadedPost={preloadedPost}
        preloadedRelatedPosts={preloadedRelatedPosts}
        slug={slug}
      />
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { fetchQuery } = await import("convex/nextjs");

  try {
    const post = await fetchQuery(api.blogs.getBlogBySlug, { slug: id });

    if (!post) {
      return {
        title: "Post Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    return {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      openGraph: {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        images: post.imageUrl ? [{ url: post.imageUrl }] : [],
        type: "article",
        publishedTime: post.createdAt,
        authors: [post.author],
      },
      twitter: {
        card: "summary_large_image",
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        images: post.imageUrl ? [post.imageUrl] : [],
      },
    };
  } catch (error) {
    return {
      title: "Error Loading Post",
      description: "An error occurred while loading the blog post.",
    };
  }
}
