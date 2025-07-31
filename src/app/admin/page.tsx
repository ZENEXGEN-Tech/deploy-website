"use client";

import { useQuery } from "convex/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Users,
  Eye,
  Calendar,
  TrendingUp,
  Clock,
  Star,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";

export default function AdminDashboard() {
  const blogs = useQuery(api.blogs.getAllBlogs, { published: undefined });
  const careers = useQuery(api.careers.getAllCareers, { isActive: undefined });

  const blogStats = {
    total: blogs?.length || 0,
    published: blogs?.filter((blog) => blog.published).length || 0,
    draft: blogs?.filter((blog) => !blog.published).length || 0,
    featured: blogs?.filter((blog) => blog.featured).length || 0,
  };

  const careerStats = {
    total: careers?.length || 0,
    active: careers?.filter((career) => career.isActive).length || 0,
    inactive: careers?.filter((career) => !career.isActive).length || 0,
    featured: careers?.filter((career) => career.featured).length || 0,
  };

  const recentBlogs = blogs?.slice(0, 5) || [];
  const recentCareers = careers?.slice(0, 5) || [];

  const statsCards = [
    {
      title: "Total Blogs",
      value: blogStats.total,
      description: `${blogStats.published} published, ${blogStats.draft} drafts`,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Careers",
      value: careerStats.total,
      description: `${careerStats.active} active positions`,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Featured Content",
      value: blogStats.featured + careerStats.featured,
      description: "Highlighted posts and positions",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "This Month",
      value: "New",
      description: "Content management system",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/blogs/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Blog
            </Button>
          </Link>
          <Link href="/admin/careers/new">
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              New Career
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Blogs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Blogs</CardTitle>
              <CardDescription>Latest blog posts</CardDescription>
            </div>
            <Link href="/admin/blogs">
              <Button variant="outline" size="sm">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-1">
                        {blog.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={blog.published ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {blog.published ? "Published" : "Draft"}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {blog.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      <Link href={`/admin/blogs/${blog._id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No blogs yet</p>
                  <Link href="/admin/blogs/new">
                    <Button size="sm" className="mt-2">
                      Create your first blog
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Careers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Careers</CardTitle>
              <CardDescription>Latest job postings</CardDescription>
            </div>
            <Link href="/admin/careers">
              <Button variant="outline" size="sm">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCareers.length > 0 ? (
                recentCareers.map((career) => (
                  <div
                    key={career._id}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-1">
                        {career.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={career.isActive ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {career.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {career.department}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {career.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      <Link href={`/admin/careers/${career._id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No career postings yet</p>
                  <Link href="/admin/careers/new">
                    <Button size="sm" className="mt-2">
                      Create your first posting
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/blogs/new">
              <Button
                variant="outline"
                className="w-full justify-start h-auto p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Create Blog Post</p>
                    <p className="text-sm text-gray-500">Write a new article</p>
                  </div>
                </div>
              </Button>
            </Link>

            <Link href="/admin/careers/new">
              <Button
                variant="outline"
                className="w-full justify-start h-auto p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Post Job Opening</p>
                    <p className="text-sm text-gray-500">Add new position</p>
                  </div>
                </div>
              </Button>
            </Link>

            <Link href="/admin/settings">
              <Button
                variant="outline"
                className="w-full justify-start h-auto p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Site Settings</p>
                    <p className="text-sm text-gray-500">Configure options</p>
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
