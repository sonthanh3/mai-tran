import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getAllProjects, getProjectBySlug, getProfile } from "@/lib/data";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

const statusMap = {
  active:   { label: "Active",      bg: "#ecfdf5", color: "#047857", border: "#a7f3d0", dot: "#10b981" },
  progress: { label: "In Progress", bg: "#fffbeb", color: "#b45309", border: "#fcd34d", dot: "#f59e0b" },
  inactive: { label: "Inactive",    bg: "#f9fafb", color: "#6b7280", border: "#e5e7eb", dot: "#9ca3af" },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const s = statusMap[project.status] ?? statusMap.inactive;
  const profile = getProfile();

  return (
    <>
      <main>
        <div style={{ background: "#f9fafb", padding: "6vh 6vw 5vh", borderBottom: "1px solid #e5e7eb" }}>
          <Link href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.85rem", color: "#6b7280", marginBottom: "1.5rem" }}>
            <ArrowLeft size={14} /> Back to projects
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: s.bg, color: s.color, border: `1px solid ${s.border}`, borderRadius: "9999px", padding: "0.25rem 0.7rem", fontSize: "0.78rem", fontWeight: 500 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.dot, display: "inline-block" }} />
              {s.label}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#2d2e32", lineHeight: 1.2, marginBottom: "0.75rem", maxWidth: 680 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#6b7280", maxWidth: 620, lineHeight: 1.7, marginBottom: "1.25rem" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#0a66c2", color: "#fff", padding: "0.5rem 1.1rem", borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>
                <ExternalLink size={16} /> View Demo
              </a>
            )}
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "5vh 6vw", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "#2d2e32", marginBottom: "0.6rem" }}>Tools & Technologies</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: "0.8rem", fontWeight: 500, padding: "0.3rem 0.75rem", borderRadius: "9999px", border: "1px solid #bfdbfe" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="prose">
            {project.content.split("\n").map((para, i) => para.trim() ? <p key={i}>{para}</p> : null)}
          </div>
        </div>

        <div style={{ background: "#f9fafb", padding: "4vh 6vw", borderTop: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/#projects" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#0a66c2", fontWeight: 600, fontSize: "0.9rem" }}>
            <ArrowLeft size={16} /> All projects
          </Link>
          <Link href="/#contact" style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#0a66c2", color: "#fff", padding: "0.5rem 1.1rem", borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>
            Get in touch
          </Link>
        </div>
      </main>
      <Footer profile={profile} />
    </>
  );
}
