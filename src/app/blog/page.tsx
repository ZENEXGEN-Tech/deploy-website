"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  BookOpen,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  Mail,
  Bell,
  Rss,
  Code2,
  Brain,
  Shield,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/utils/data";
import { Banner } from "@/components/Banner";

const categories = [
  { name: "All", count: blogPosts?.length || 0, icon: BookOpen },
  {
    name: "AI/ML",
    count: blogPosts?.filter((post) => post.category === "AI/ML").length || 0,
    icon: Brain,
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    iconBg: "from-purple-500 to-violet-600",
    accent: "text-purple-500",
  },
  {
    name: "Development",
    count:
      blogPosts?.filter((post) => post.category === "Development").length || 0,
    icon: Code2,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    iconBg: "from-blue-500 to-cyan-600",
    accent: "text-blue-500",
  },
  {
    name: "Automation",
    count:
      blogPosts?.filter((post) => post.category === "Automation").length || 0,
    icon: Zap,
    gradient: "from-yellow-500/20 via-orange-500/20 to-amber-500/20",
    iconBg: "from-yellow-500 to-orange-600",
    accent: "text-yellow-500",
  },
  {
    name: "Security",
    count:
      blogPosts?.filter((post) => post.category === "Security").length || 0,
    icon: Shield,
    gradient: "from-red-500/20 via-pink-500/20 to-rose-500/20",
    iconBg: "from-red-500 to-pink-600",
    accent: "text-red-500",
  },
  {
    name: "IoT",
    count: blogPosts?.filter((post) => post.category === "IoT").length || 0,
    icon: Cpu,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    name: "Analytics",
    count:
      blogPosts?.filter((post) => post.category === "Analytics").length || 0,
    icon: Database,
    gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
    iconBg: "from-indigo-500 to-blue-600",
    accent: "text-indigo-500",
  },
];

const blogStats = [
  {
    icon: BookOpen,
    number: "150+",
    label: "Articles",
    sublabel: "Published",
  },
  {
    icon: Eye,
    number: "50K+",
    label: "Monthly Readers",
    sublabel: "Globally",
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Reader Satisfaction",
    sublabel: "Rating",
  },
  {
    icon: Heart,
    number: "10K+",
    label: "Newsletter",
    sublabel: "Subscribers",
  },
];

// Mock enhanced blog posts with additional properties
const enhancedBlogPosts =
  blogPosts?.map((post, index) => ({
    ...post,
    gradient:
      categories.find((cat) => cat.name === post.category)?.gradient ||
      "from-gray-500/20 via-slate-500/20 to-gray-500/20",
    iconBg:
      categories.find((cat) => cat.name === post.category)?.iconBg ||
      "from-gray-500 to-slate-600",
    accent:
      categories.find((cat) => cat.name === post.category)?.accent ||
      "text-gray-500",
    icon:
      categories.find((cat) => cat.name === post.category)?.icon || BookOpen,
    views: Math.floor(Math.random() * 5000) + 1000,
    likes: Math.floor(Math.random() * 500) + 50,
  })) || [];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? enhancedBlogPosts
      : enhancedBlogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Banner
        title={
          <>
            Latest Tech <span className="text-gradient">Insights</span>
          </>
        }
        description="Insights, trends, and innovations from the world of technology. Stay updated with our latest thoughts and discoveries."
        badge="Our Blog"
      />

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Impact</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights with the global tech community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {blogStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <h4 className="text-lg font-semibold mb-1">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={
                  category.name === activeCategory ? "default" : "outline"
                }
                className={`rounded-full transition-all duration-300 group ${
                  category.name === activeCategory
                    ? "bg-gradient-primary hover:shadow-glow scale-105"
                    : "hover:scale-105 hover:border-primary/50"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <category.icon className="w-4 h-4 mr-2" />
                <span>{category.name}</span>
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    category.name === activeCategory
                      ? "bg-white/20"
                      : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  }`}
                >
                  {category.count}
                </span>
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div
                    className={`group relative rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl overflow-hidden h-full flex flex-col`}
                  >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden rounded-t-3xl">
                      <img
                        src="https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/10 backdrop-blur-sm text-xs"
                        >
                          {post.category}
                        </Badge>

                        {/* Stats */}
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {post.likes}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-6 flex-1 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
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
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className={`absolute -bottom-2 -right-2 w-20 h-20 ${post.accent.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                    ></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Articles Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No articles match your current filter. Try selecting a different
                category or check back later for new content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-primary-glow/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-500">
            <Mail className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Stay <span className="text-gradient">Updated</span>
          </h2>

          <p className="text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss our latest insights,
            tutorials, and industry updates.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button className="btn-hero group px-6 py-3">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Benefits */}
              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Weekly insights
                </span>
                <span className="flex items-center gap-1">
                  <Rss className="w-3 h-3" />
                  No spam
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  Unsubscribe anytime
                </span>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300 group"
            >
              <Rss className="w-5 h-5 mr-2" />
              RSS Feed
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300 group"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Archive
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
