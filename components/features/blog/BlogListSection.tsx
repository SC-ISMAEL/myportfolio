"use client";

import Link from "next/link";
import { useState } from "react";
import { blogPosts } from "@/lib/blog-data";

const categories = ["All", "Honda Beat", "Comparisons", "Ride Routes"];

export function BlogListSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="min-h-screen pt-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Motorcycle Stories & Notes
          </h1>
          <p className="text-sm text-muted-foreground">
            Mock articles about Honda Beat and beginner scooter life—built to
            demo dynamic routing.
          </p>
        </header>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs md:text-sm border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:bg-accent/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm flex flex-col gap-3"
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
              <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-primary hover:underline"
                >
                  Read story
                </Link>
                <Link
                  href={`/categories/${encodeURIComponent(post.category.toLowerCase())}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  View more in {post.category}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

