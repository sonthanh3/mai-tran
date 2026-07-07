"use client";

import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Post, formatDate } from "@/lib/data";

const categoryColors: Record<string, { bg: string; color: string }> = {
  Accounting: { bg: "#eff6ff", color: "#1d4ed8" },
  Finance:    { bg: "#f0fdf4", color: "#15803d" },
  Tax:        { bg: "#fefce8", color: "#a16207" },
  Audit:      { bg: "#fdf4ff", color: "#7e22ce" },
};

function getCategoryStyle(cat: string) {
  return categoryColors[cat] ?? { bg: "#f3f4f6", color: "#374151" };
}

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section
      id="blog"
      style={{
        background: "#f9fafb",
        padding: "10vh 6vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          marginBottom: "3rem",
        }}
      >
        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0a66c2", letterSpacing: "0.05em" }}>
          BLOG
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2d2e32", textAlign: "center" }}>
          Thoughts on accounting & finance
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          marginBottom: "2.5rem",
        }}
      >
        {posts.map((post, i) => {
          const catStyle = getCategoryStyle(post.category);
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card animate-fade-up"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                animationDelay: `${i * 80}ms`,
                color: "inherit",
              }}
            >
              {/* Cover image placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "#e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              >
                📝
              </div>

              <div style={{ padding: "1.1rem", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Category + read time */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.65rem" }}>
                  <span
                    style={{
                      background: catStyle.bg,
                      color: catStyle.color,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.75rem",
                      color: "#9ca3af",
                    }}
                  >
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "0.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "#374151",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  <time style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                    {formatDate(post.date)}
                  </time>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.8rem",
                      color: "#0a66c2",
                      fontWeight: 500,
                    }}
                  >
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View all link */}
      <Link
        href="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          border: "2px solid #0a66c2",
          color: "#0a66c2",
          padding: "0.6rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#0a66c2";
          (e.currentTarget as HTMLElement).style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#0a66c2";
        }}
      >
        View all posts <ArrowRight size={16} />
      </Link>
    </section>
  );
}
