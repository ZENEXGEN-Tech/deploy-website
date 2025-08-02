import { Banner } from "@/components/Banner";
import { BlogClient } from "@/components/blog/BlogClient";
import { Button } from "@/components/ui/button";
import { blogStats } from "@/data";
import {
  BookOpen,
  Eye,
  TrendingUp,
  Heart,
  Mail,
  ArrowRight,
  Sparkles,
  Bell,
  Rss,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Latest tech insights and trends from the world of technology.",
};

export default function BlogPage() {
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
            {blogStats.map((stat) => (
              <div key={stat.label} className="text-center group">
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

      {/* Client Component for Blog Data and Interactive Features */}
      <BlogClient />

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
