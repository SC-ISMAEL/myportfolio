"use client";

import Link from "next/link";
import { getPostsByCategory } from "@/lib/blog-data";

type CategorySectionProps = {
  segments: string[] | undefined;
};

export function CategorySection({ segments }: CategorySectionProps) {
  const categorySlug = segments?.[0] ?? "";
  const humanCategory =
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  const posts = categorySlug ? getPostsByCategory(humanCategory) : [];

  return (
    <section className="min-h-screen pt-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <header className="space-y-1">
          <h1 className="text-3xl font-semibold">
            Category: {humanCategory || "Unknown"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Catch-all category route using mock motorcycle posts.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No posts found for this category. Try returning to the{" "}
            <Link href="/blog" className="text-primary hover:underline">
              blog overview
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm flex flex-col gap-2"
              >
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-PH", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-foreground/80 line-clamp-3">
                  {post.summary}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto text-xs font-semibold text-primary hover:underline"
                >
                  Read story
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

