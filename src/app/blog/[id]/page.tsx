import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/utils/data";

const getBlogPost = (id: string) => {
  return blogPosts.find((post) => post.id === id) || null;
};

const getRelatedPosts = (currentId: string, category: string) => {
  return blogPosts
    .filter((post) => post.id !== currentId && post.category === category)
    .slice(0, 3);
};

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: blogId } = await params;
  const post = getBlogPost(blogId || "");

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 card-glass rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{post.author}</h3>
                <p className="text-muted-foreground">
                  Senior technology writer and AI researcher with over 10 years
                  of experience in software development and emerging
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getRelatedPosts(post.id, post.category).map((relatedPost) => (
              <Card key={relatedPost.id} className="card-hover">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-semibold mb-2 leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {relatedPost.readTime}
                  </p>
                  <Link href={`/blog/${relatedPost.id}`}>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
