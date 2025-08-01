"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Star,
  FileText,
  Calendar,
  Clock,
  User,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";

export default function AdminBlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const blogs = useQuery(api.blogs.getAllBlogs, { published: undefined });
  const categories = useQuery(api.blogs.getBlogCategories);
  const deleteBlogMutation = useMutation(api.blogs.deleteBlog);

  // Get unique categories from blogs if categories table is empty
  const allCategories = categories?.length
    ? categories.map((cat) => cat.name)
    : [...new Set(blogs?.map((blog) => blog.category) || [])];

  // Filter blogs
  const filteredBlogs =
    blogs?.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Published" && blog.published) ||
        (selectedStatus === "Draft" && !blog.published);

      return matchesSearch && matchesCategory && matchesStatus;
    }) || [];

  const handleDelete = async (id: string, title: string) => {
    try {
      await deleteBlogMutation({ id: id as any });
      toast.success(`Blog "${title}" deleted successfully`);
    } catch (error) {
      toast.error("Failed to delete blog");
      console.error(error);
    }
  };

  const stats = {
    total: blogs?.length || 0,
    published: blogs?.filter((b) => b.published).length || 0,
    draft: blogs?.filter((b) => !b.published).length || 0,
    featured: blogs?.filter((b) => b.featured).length || 0,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-1">
            Create and manage your blog posts
          </p>
        </div>
        <Link href="/admin/blogs/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Blog Post
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-50">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.published}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-50">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-gray-600">
                  {stats.draft}
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-50">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Featured</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.featured}
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-50">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                className="rounded-full"
              >
                All
              </Button>
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              {["All", "Published", "Draft"].map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className="rounded-full"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blogs Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts ({filteredBlogs.length})</CardTitle>
          <CardDescription>
            Manage your blog content and track performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredBlogs.length > 0 ? (
            <div className="space-y-4">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg line-clamp-1">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={blog.published ? "default" : "secondary"}
                        >
                          {blog.published ? "Published" : "Draft"}
                        </Badge>
                        {blog.featured && (
                          <Badge
                            variant="outline"
                            className="text-yellow-600 border-yellow-200"
                          >
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {blog.category}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{blog.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/blog/${blog.slug}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>

                    <Link href={`/admin/blogs/${blog._id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete `&quot;{blog.title}
                            `&quot;? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(blog._id, blog.title)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ||
                selectedCategory !== "All" ||
                selectedStatus !== "All"
                  ? "No blog posts match your current filters."
                  : "Get started by creating your first blog post."}
              </p>
              {!searchTerm &&
                selectedCategory === "All" &&
                selectedStatus === "All" && (
                  <Link href="/admin/blogs/new">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create Blog Post
                    </Button>
                  </Link>
                )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
