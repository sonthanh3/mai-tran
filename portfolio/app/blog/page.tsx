import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getAllPosts, formatDate, getProfile } from "@/lib/data";
import Footer from "@/components/Footer";

export const metadata = { title: "Blog" };

const categoryColors: Record<string, { bg: string; color: string }> = {
  Accounting: { bg: "#eff6ff", color: "#1d4ed8" },
  Finance:    { bg: "#f0fdf4", color: "#15803d" },
  Tax:        { bg: "#fefce8", color: "#a16207" },
  Audit:      { bg: "#fdf4ff", color: "#7e22ce" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const profile = getProfile();

  return (
    <>
      <main style={{ minHeight: "80vh" }}>
        <div style={{ background: "#f9fafb", padding: "6vh 6vw 4vh", borderBottom: "1px solid #e5e7eb" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "#6b7280", display: "inline-flex", alignItems: "center", gap: "0.3rem", marginBottom: "1.5rem" }}>
            ← Back to home
          </Link>
          <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0a66c2", letterSpacing: "0.05em", marginBottom: "0.4rem" }}>BLOG</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#2d2e32" }}>All posts</h1>
        </div>

        <div style={{ padding: "4vh 6vw", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {posts.map((post) => {
            const catStyle = categoryColors[post.category] ?? { bg: "#f3f4f6", color: "#374151" };
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card"
                style={{ display: "flex", flexDirection: "column", padding: "1.4rem 1.6rem", gap: "0.5rem", color: "inherit" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ background: catStyle.bg, color: catStyle.color, fontSize: "0.72rem", fontWeight: 600, padding: "0.2rem 0.6rem", borderRadius: "9999px" }}>
                    {post.category}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", color: "#9ca3af" }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#9ca3af", marginLeft: "auto" }}>{formatDate(post.date)}</span>
                </div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111827" }}>{post.title}</h2>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.6 }}>{post.excerpt}</p>
                <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.82rem", color: "#0a66c2", fontWeight: 500 }}>
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer profile={profile} />
    </>
  );
}
