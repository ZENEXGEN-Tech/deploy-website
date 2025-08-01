"use client";

import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  ChevronRight,
  Eye,
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  ArrowUp,
  BookOpen,
  TrendingUp,
  Star,
  Download,
  Printer,
  MoreHorizontal,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { api } from "../../../../convex/_generated/api";

// Reading Progress Component
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / total) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Share Menu Component
const ShareMenu = ({ title, url }: { title: string; url: string }) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-700",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="sm"
          asChild
          className={`${link.color} transition-colors`}
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <link.icon className="w-4 h-4" />
          </a>
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="transition-colors"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
};

// Loading Skeleton Components
const BlogDetailSkeleton = () => (
  <div className="min-h-screen">
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </div>

    <article className="pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>

          <Skeleton className="h-16 w-4/5 mb-8" />
          <div className="space-y-3 mb-10">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>

          <div className="p-6 rounded-2xl border mb-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
          </div>

          <Skeleton className="aspect-video w-full rounded-2xl" />
        </header>

        <div className="space-y-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </article>
  </div>
);

export default function BlogDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");

  // Get slug from params
  const slug = params.id;

  // Fetch the blog post by slug
  const post = useQuery(api.blogs.getBlogBySlug, { slug });

  // Fetch related posts when we have post data
  const relatedPosts = useQuery(
    api.blogs.getAllBlogs,
    post ? { published: true, category: post.category } : "skip"
  );

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Update document title when post loads
  useEffect(() => {
    if (post) {
      document.title = post.seoTitle || post.title;

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          post.seoDescription || post.excerpt
        );
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = post.seoDescription || post.excerpt;
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  // Loading state
  if (post === undefined) {
    return <BlogDetailSkeleton />;
  }

  // Not found state
  if (post === null || !post.published) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The blog post you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <Button variant="outline" onClick={() => router.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Filter related posts
  const filteredRelatedPosts =
    relatedPosts?.filter((blog) => blog._id !== post._id).slice(0, 3) || [];

  return (
    <div className="min-h-screen mt-24">
      <ReadingProgress />

      {/* Enhanced Header */}
      <div className="pt-20 pb-8 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Header */}
          <header className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge
                    variant="outline"
                    className="text-yellow-600 border-yellow-200 px-3 py-1"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Enhanced Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 p-6 card-glass rounded-2xl">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-xs">Author</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShareMenu title={post.title} url={currentUrl} />
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            {/* Enhanced Featured Image */}
            {post.imageUrl && (
              <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden mb-12 group">
                <img
                  src={
                    post.imageUrl ||
                    "https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg"
                  }
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
          </header>

          {/* Enhanced Content */}
          <div className="relative">
            {/* Enhanced Markdown Content */}
            <div
              className="prose prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold 
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary
              prose-code:text-foreground prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-muted prose-pre:text-foreground prose-pre:border prose-pre:rounded-xl
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-3">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-10 mb-5 text-foreground">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 ml-6 list-disc text-muted-foreground space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 ml-6 list-decimal text-muted-foreground space-y-2">
                      {children}
                    </ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-muted-foreground bg-primary/5 py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code className="px-2 py-1 bg-muted rounded font-mono text-sm text-foreground border">
                          {children}
                        </code>
                      );
                    }
                    return <code className={className}>{children}</code>;
                  },
                  pre: ({ children }) => (
                    <pre className="bg-muted p-6 rounded-xl overflow-x-auto mb-6 text-sm border shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Enhanced Tags Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Enhanced Author Section */}
          <div className="mt-16 p-8 card-glass rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{post.author}</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Senior technology writer and AI researcher with over 10 years
                  of experience in software development and emerging
                  technologies. Passionate about making complex topics
                  accessible.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>150+ Articles</span>
                  <span>•</span>
                  <span>50K+ Followers</span>
                  <span>•</span>
                  <span>Tech Lead at Company</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex items-center justify-between p-6 card-glass rounded-2xl">
            <div className="flex items-center gap-4">
              <Button className="px-6 py-3">
                <Heart className="w-4 h-4 mr-2" />
                Like Article
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Printer className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Enhanced Related Posts */}
      {filteredRelatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Continue Reading</h2>
            <p className="text-muted-foreground mb-12">
              More articles you might find interesting
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredRelatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost._id}
                  className="card-glass border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                  <CardContent className="p-0">
                    {relatedPost.imageUrl && (
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img
                          src={
                            relatedPost.imageUrl ||
                            "https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg"
                          }
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-bold mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </span>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto group-hover:text-primary font-medium"
                          >
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Navigation */}
      <div className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/blog">
            <Button variant="outline" className="px-6 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
}
