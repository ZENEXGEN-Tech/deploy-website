"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar,
  Clock,
  User,
  Search,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Code2,
  Brain,
  Shield,
  Zap,
  Database,
  Cpu,
  Sparkles,
  ArrowRight,
  Grid,
  List,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";

// Category icons mapping
const categoryIcons: Record<string, any> = {
  Technology: Code2,
  "AI & Machine Learning": Brain,
  "Web Development": Code2,
  "Software Engineering": Code2,
  "Product Updates": TrendingUp,
  "Company News": BookOpen,
  Tutorials: BookOpen,
  "Industry Insights": TrendingUp,
  Security: Shield,
  Automation: Zap,
  IoT: Cpu,
  Analytics: Database,
  "AI/ML": Brain,
  Development: Code2,
};

// Category gradients and styling
const categoryStyles: Record<string, any> = {
  "AI & Machine Learning": {
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    iconBg: "from-purple-500 to-violet-600",
    accent: "text-purple-500",
  },
  "Web Development": {
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconBg: "from-blue-500 to-cyan-600",
    accent: "text-blue-500",
  },
  Development: {
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconBg: "from-blue-500 to-cyan-600",
    accent: "text-blue-500",
  },
  Automation: {
    gradient: "from-yellow-500/20 via-orange-500/20 to-amber-500/20",
    iconBg: "from-yellow-500 to-orange-600",
    accent: "text-yellow-500",
  },
  Security: {
    gradient: "from-red-500/20 via-pink-500/20 to-rose-500/20",
    iconBg: "from-red-500 to-pink-600",
    accent: "text-red-500",
  },
  IoT: {
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  Analytics: {
    gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
    iconBg: "from-indigo-500 to-blue-600",
    accent: "text-indigo-500",
  },
  "AI/ML": {
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    iconBg: "from-purple-500 to-violet-600",
    accent: "text-purple-500",
  },
};

// Enhanced Skeleton components
const BlogCardSkeleton = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="group relative rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden h-full flex flex-col">
      <Skeleton className="aspect-video" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-24 rounded-full" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-8" />
          </div>
        </div>
        <Skeleton className="h-6 w-4/5 mb-2" />
        <Skeleton className="h-6 w-3/5 mb-4" />
        <div className="space-y-2 mb-6 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-4">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  </motion.div>
);

const FeaturedBlogSkeleton = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="card-glass border-0 overflow-hidden">
      <CardContent className="p-0">
        <Skeleton className="aspect-video" />
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-8 w-4/5 mb-3" />
          <Skeleton className="h-8 w-3/5 mb-6" />
          <div className="space-y-3 mb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-14" />
            </div>
            <Skeleton className="h-8 w-28" />
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const CategoryFilterSkeleton = () => (
  <div className="flex flex-wrap justify-center gap-3 mb-20">
    {Array.from({ length: 6 }).map((_, i) => (
      <Skeleton key={i} className="h-12 w-32 rounded-full" />
    ))}
  </div>
);

export const BlogClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"date" | "popularity" | "title">("date");

  const blogs = useQuery(api.blogs.getAllBlogs, { published: true });
  const categories = useQuery(api.blogs.getBlogCategories);

  // Filter and sort blogs
  const filteredBlogs = (() => {
    let filtered =
      blogs?.filter((blog) => {
        const matchesSearch =
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchesCategory =
          selectedCategory === "All" || blog.category === selectedCategory;

        return matchesSearch && matchesCategory;
      }) || [];

    // Sort blogs
    switch (sortBy) {
      case "date":
        return filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return filtered;
    }
  })();

  // Get unique categories from blogs if categories table is empty
  const allCategories = categories?.length
    ? categories.map((cat) => cat.name)
    : [...new Set(blogs?.map((blog) => blog.category) || [])];

  // Create category objects with counts
  const categoryObjects = [
    { name: "All", count: blogs?.length || 0, icon: BookOpen },
    ...allCategories.map((cat) => ({
      name: cat,
      count: blogs?.filter((blog) => blog.category === cat).length || 0,
      icon: categoryIcons[cat] || BookOpen,
      ...(categoryStyles[cat] || {
        gradient: "from-gray-500/20 via-slate-500/20 to-gray-500/20",
        iconBg: "from-gray-500 to-slate-600",
        accent: "text-gray-500",
      }),
    })),
  ];

  const featuredBlogs =
    blogs?.filter((blog) => blog.featured).slice(0, 3) || [];

  // Enhanced blogs with styling
  const enhancedBlogs = filteredBlogs.map((blog) => ({
    ...blog,
    ...(categoryStyles[blog.category] || {
      gradient: "from-gray-500/20 via-slate-500/20 to-gray-500/20",
      iconBg: "from-gray-500 to-slate-600",
      accent: "text-gray-500",
    }),
    icon: categoryIcons[blog.category] || BookOpen,
  }));

  return (
    <>
      {/* Featured Blogs */}
      {(featuredBlogs.length > 0 || blogs === undefined) && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Badge
                variant="outline"
                className="text-primary border-primary bg-primary/10 px-4 py-2"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Featured
              </Badge>
              <h2 className="text-3xl font-bold">Top Stories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs === undefined
                ? Array.from({ length: 3 }).map((_, index) => (
                    <FeaturedBlogSkeleton key={index} index={index} />
                  ))
                : featuredBlogs.map((blog, index) => (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="card-glass border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <CardContent className="p-0">
                          {blog.imageUrl && (
                            <div className="aspect-video bg-muted overflow-hidden">
                              <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          )}
                          <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                              <Badge
                                variant="secondary"
                                className="bg-white/10 backdrop-blur-sm"
                              >
                                {blog.category}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                              {blog.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                              {blog.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <User className="w-3 h-3" />
                                  {blog.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(
                                    blog.createdAt
                                  ).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {blog.readTime}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-2">
                                <Share2 className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                                <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                              </div>
                              <Link href={`/blog/${blog.slug}`}>
                                <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors cursor-pointer group/link">
                                  <span className="text-sm font-medium">
                                    Read More
                                  </span>
                                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Knowledge Hub</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive deep into the latest trends, technologies, and best practices
            </p>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">All Articles</h3>
              <div className="text-muted-foreground">
                {blogs === undefined ? (
                  <Skeleton className="h-4 w-32" />
                ) : (
                  `${filteredBlogs.length} article${filteredBlogs.length !== 1 ? "s" : ""} found`
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80 bg-background/50 backdrop-blur-sm border-white/10"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-white/10 text-sm"
              >
                <option value="date">Latest</option>
                <option value="popularity">Popular</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          {categories === undefined ? (
            <CategoryFilterSkeleton />
          ) : (
            <div className="flex flex-wrap justify-center gap-3 mb-20">
              {categoryObjects.map((category) => (
                <Button
                  key={category.name}
                  variant={
                    category.name === selectedCategory ? "default" : "outline"
                  }
                  className={`rounded-full transition-all duration-300 group ${
                    category.name === selectedCategory
                      ? "bg-gradient-primary hover:shadow-glow scale-105"
                      : "hover:scale-105 hover:border-primary/50 bg-background/50 backdrop-blur-sm border-white/10"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  <span>{category.name}</span>
                  <span
                    className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      category.name === selectedCategory
                        ? "bg-white/20"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                    }`}
                  >
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          )}

          {/* Blog Posts Grid */}
          {blogs === undefined ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <BlogCardSkeleton key={index} index={index} />
              ))}
            </motion.div>
          ) : enhancedBlogs.length > 0 ? (
            <motion.div
              className={`grid gap-8 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}
              layout
            >
              {enhancedBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <Link href={`/blog/${blog.slug}`} className="block">
                    <div
                      className={`group relative rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl overflow-hidden h-full ${
                        viewMode === "list" ? "flex" : "flex flex-col"
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`${viewMode === "list" ? "w-80 aspect-video" : "aspect-video"} overflow-hidden ${viewMode === "grid" ? "rounded-t-2xl" : "rounded-l-2xl"}`}
                      >
                        <img
                          src={
                            blog.imageUrl ||
                            "https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg"
                          }
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1">
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant="secondary"
                            className="bg-white/10 backdrop-blur-sm text-xs flex items-center gap-1"
                          >
                            <blog.icon className="w-3 h-3" />
                            {blog.category}
                          </Badge>
                          {blog.featured && (
                            <Badge
                              variant="outline"
                              className="text-yellow-600 border-yellow-200 text-xs"
                            >
                              Featured
                            </Badge>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-muted-foreground mb-6 flex-1 leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.slice(0, 2).map((tag: string) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {blog.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{blog.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {blog.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {blog.readTime}
                            </span>
                          </div>
                        </div>

                        {/* Read More Link */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Share2 className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                            <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                          </div>
                          <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors cursor-pointer group/link">
                            <span className="text-sm font-medium">
                              Read More
                            </span>
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </div>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div
                        className={`absolute -bottom-2 -right-2 w-20 h-20 ${blog.accent.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                      ></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                {searchTerm
                  ? `No articles match your search "${searchTerm}". Try different keywords or browse all categories.`
                  : "No articles are currently available in this category."}
              </p>
              {(searchTerm || selectedCategory !== "All") && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
