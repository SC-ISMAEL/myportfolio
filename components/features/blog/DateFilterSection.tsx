"use client";

import Link from "next/link";
import { filterPostsByDateSegments } from "@/lib/blog-data";

type DateFilterSectionProps = {
  segments: string[] | undefined;
};

export function DateFilterSection({ segments }: DateFilterSectionProps) {
  const posts = filterPostsByDateSegments(segments);

  const label =
    !segments || segments.length === 0
      ? "All dates"
      : segments.join(" / ");

  return (
    <section className="min-h-screen pt-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <header className="space-y-1">
          <h1 className="text-3xl font-semibold">Posts by Date</h1>
          <p className="text-sm text-muted-foreground">
            Optional catch-all date filter scoped to the root folder. Current
            filter: <span className="font-medium text-foreground">{label}</span>
          </p>
        </header>

        <p className="text-xs text-muted-foreground">
          Try routes like <code className="font-mono">/date/2025</code>,{" "}
          <code className="font-mono">/date/2025/02</code>, or{" "}
          <code className="font-mono">/date/2025/03/10</code>.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm flex flex-col gap-2"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {post.category}
              </p>
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
      </div>
    </section>
  );
}

