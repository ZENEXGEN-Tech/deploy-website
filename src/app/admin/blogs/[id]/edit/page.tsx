"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, X, Save, Eye, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";

const defaultCategories = [
  "Technology",
  "AI & Machine Learning",
  "Web Development",
  "Software Engineering",
  "Product Updates",
  "Company News",
  "Tutorials",
  "Industry Insights",
];

export default function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [blogId, setBlogId] = useState<string>("");

  // Resolve params
  useEffect(() => {
    params.then(({ id }) => setBlogId(id));
  }, [params]);

  const blog = useQuery(
    api.blogs.getBlogById,
    blogId ? { id: blogId as Id<"blogs"> } : "skip"
  );
  const updateBlogMutation = useMutation(api.blogs.updateBlog);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [""],
    author: "",
    readTime: "",
    published: false,
    featured: false,
    imageUrl: "",
    seoTitle: "",
    seoDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  // Load blog data when it's available
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags.length > 0 ? blog.tags : [""],
        author: blog.author,
        readTime: blog.readTime,
        published: blog.published,
        featured: blog.featured,
        imageUrl: blog.imageUrl || "",
        seoTitle: blog.seoTitle || "",
        seoDescription: blog.seoDescription || "",
      });
      setIsLoading(false);
    }
  }, [blog]);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTagAdd = () => {
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, ""],
    }));
  };

  const handleTagRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleTagChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.map((tag, i) => (i === index ? value : tag)),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogId) return;

    setIsSubmitting(true);

    try {
      // Filter out empty tags
      const cleanedData = {
        id: blogId as Id<"blogs">,
        ...formData,
        tags: formData.tags.filter((tag) => tag.trim() !== ""),
        seoTitle: formData.seoTitle || formData.title,
        seoDescription: formData.seoDescription || formData.excerpt,
      };

      await updateBlogMutation(cleanedData);
      toast.success("Blog post updated successfully!");
      router.push("/admin/blogs");
    } catch (error) {
      toast.error("Failed to update blog post");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Estimate reading time based on content length
  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`;
  };

  // Auto-update read time when content changes
  const handleContentChange = (content: string) => {
    handleInputChange("content", content);
    const estimatedTime = estimateReadTime(content);
    setFormData((prev) => ({ ...prev, readTime: estimatedTime }));
  };

  if (isLoading || !blog) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
            <p className="text-gray-600">Update your blog content</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/blog/${blog.slug}`} target="_blank">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Live
            </Button>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Essential details about your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter an engaging blog title..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) =>
                      handleInputChange("excerpt", e.target.value)
                    }
                    placeholder="Write a compelling summary of your blog post..."
                    className="h-24"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    This will appear in blog listings and search results.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select category</option>
                      {defaultCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) =>
                        handleInputChange("author", e.target.value)
                      }
                      placeholder="Author name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="imageUrl">
                    Featured Image URL (Optional)
                  </Label>
                  <Input
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      handleInputChange("imageUrl", e.target.value)
                    }
                    placeholder="https://example.com/image.jpg"
                    type="url"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>
                  Write your blog post content in Markdown format
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.content}
                  onChange={(e) => handleContentChange(e.target.value)}
                  placeholder="Write your blog content here using Markdown formatting..."
                  className="min-h-[400px] font-mono text-sm"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  You can use Markdown formatting including headers, lists,
                  links, code blocks, and more.
                </p>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>
                  Add relevant tags to help categorize your content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Blog Tags</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleTagAdd}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Tag
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.tags.map((tag, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={tag}
                          onChange={(e) =>
                            handleTagChange(index, e.target.value)
                          }
                          placeholder="e.g. React, JavaScript, Tutorial"
                        />
                        {formData.tags.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleTagRemove(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Optimize your blog post for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">SEO Title</Label>
                  <Input
                    id="seoTitle"
                    value={formData.seoTitle}
                    onChange={(e) =>
                      handleInputChange("seoTitle", e.target.value)
                    }
                    placeholder="SEO-optimized title"
                    maxLength={60}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.seoTitle.length}/60 characters
                  </p>
                </div>

                <div>
                  <Label htmlFor="seoDescription">SEO Description</Label>
                  <Textarea
                    id="seoDescription"
                    value={formData.seoDescription}
                    onChange={(e) =>
                      handleInputChange("seoDescription", e.target.value)
                    }
                    placeholder="SEO-optimized description"
                    className="h-20"
                    maxLength={160}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.seoDescription.length}/160 characters
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="published">Published</Label>
                    <p className="text-sm text-gray-500">
                      Make this post visible to readers
                    </p>
                  </div>
                  <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) =>
                      handleInputChange("published", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="featured">Featured</Label>
                    <p className="text-sm text-gray-500">Highlight this post</p>
                  </div>
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) =>
                      handleInputChange("featured", checked)
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) =>
                      handleInputChange("readTime", e.target.value)
                    }
                    placeholder="5 min read"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Auto-calculated based on content length
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Post Info */}
            <Card>
              <CardHeader>
                <CardTitle>Post Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Created:</span>{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Updated:</span>{" "}
                  {new Date(blog.updatedAt).toLocaleDateString()}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Slug:</span>{" "}
                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                    {blog.slug}
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formData.title && (
                    <h3 className="font-semibold line-clamp-2">
                      {formData.title}
                    </h3>
                  )}
                  {formData.excerpt && (
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {formData.excerpt}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {formData.category && (
                      <Badge variant="secondary">{formData.category}</Badge>
                    )}
                    {formData.featured && (
                      <Badge variant="outline" className="text-yellow-600">
                        Featured
                      </Badge>
                    )}
                    <Badge variant={formData.published ? "default" : "outline"}>
                      {formData.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500">
                    <p>By {formData.author}</p>
                    <p>{formData.readTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Updating..." : "Update Blog Post"}
                  </Button>
                  <Link href="/admin/blogs">
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
