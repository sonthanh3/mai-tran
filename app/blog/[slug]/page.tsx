import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, formatDate, getProfile } from "@/lib/data";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i}>{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`}>
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const profile = getProfile();

  return (
    <>
      <main>
        <div style={{ background: "#f9fafb", padding: "6vh 6vw 5vh", borderBottom: "1px solid #e5e7eb" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.85rem", color: "#6b7280", marginBottom: "1.5rem" }}>
            <ArrowLeft size={14} /> Back to blog
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: "0.78rem", fontWeight: 600, padding: "0.25rem 0.7rem", borderRadius: "9999px" }}>
              {post.category}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "#9ca3af" }}>
              <Clock size={13} /> {post.readTime}
            </span>
            <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>{formatDate(post.date)}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#2d2e32", lineHeight: 1.25, maxWidth: 720, marginBottom: "1rem" }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#6b7280", maxWidth: 640, lineHeight: 1.7 }}>{post.excerpt}</p>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "5vh 6vw" }} className="prose">
          {renderContent(post.content)}
        </div>

        <div style={{ background: "#f9fafb", padding: "4vh 6vw", borderTop: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#0a66c2", fontWeight: 600, fontSize: "0.9rem" }}>
            <ArrowLeft size={16} /> All posts
          </Link>
          <Link href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#0a66c2", color: "#fff", padding: "0.5rem 1.1rem", borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>
            Get in touch
          </Link>
        </div>
      </main>
      <Footer profile={profile} />
    </>
  );
}
