"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

type BlogPostSectionProps = {
  post: BlogPost | undefined;
};

export function BlogPostSection({ post }: BlogPostSectionProps) {
  if (!post) {
    return (
      <section className="min-h-screen pt-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <p className="text-sm text-muted-foreground">
            This mock post might have been renamed. Try returning to the blog
            overview.
          </p>
          <Link
            href="/blog"
            className="inline-flex text-sm text-primary hover:underline"
          >
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <Link
          href="/blog"
          className="inline-flex text-xs text-muted-foreground hover:text-foreground"
        >
          ← Back to all posts
        </Link>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {post.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{post.title}</h1>
        <p className="text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-PH", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <div className="h-px bg-border/70" />
        <article className="prose prose-sm sm:prose-base max-w-none text-foreground/90 dark:prose-invert">
          {post.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 20)}>{para}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

