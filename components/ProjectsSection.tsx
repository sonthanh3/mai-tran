"use client";

import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";
import { Project } from "@/lib/data";

const statusMap = {
  active:   { label: "Active",      bg: "#ecfdf5", color: "#047857", border: "#a7f3d0", dot: "#10b981" },
  progress: { label: "In Progress", bg: "#fffbeb", color: "#b45309", border: "#fcd34d", dot: "#f59e0b" },
  inactive: { label: "Inactive",    bg: "#f9fafb", color: "#6b7280", border: "#e5e7eb", dot: "#9ca3af" },
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      style={{
        background: "#fff",
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
          PROJECTS
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2d2e32", textAlign: "center" }}>
          Case studies & academic work
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {projects.map((project, i) => {
          const s = statusMap[project.status] ?? statusMap.inactive;
          return (
            <div
              key={project.slug}
              className="card animate-fade-up"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                animationDelay: `${i * 80}ms`,
              }}
            >
              {/* Cover image placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                📊
              </div>

              <div style={{ padding: "1.1rem", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Status badge */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: s.bg,
                    color: s.color,
                    border: `1px solid ${s.border}`,
                    borderRadius: "9999px",
                    padding: "0.25rem 0.65rem",
                    fontSize: "0.73rem",
                    fontWeight: 500,
                    width: "fit-content",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span
                    className={project.status !== "inactive" ? "animate-pulse-dot" : ""}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: s.dot,
                      display: "inline-block",
                    }}
                  />
                  {s.label}
                </span>

                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", marginBottom: "0.4rem" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.83rem", color: "#374151", flex: 1, marginBottom: "0.75rem", lineHeight: 1.5 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      background: "#0a66c2",
                      color: "#fff",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "0.4rem",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0957a8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a66c2")}
                  >
                    Read more
                  </Link>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        background: "#f3f4f6",
                        color: "#374151",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "0.4rem",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        background: "#f3f4f6",
                        color: "#374151",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "0.4rem",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      <GitBranch size={12} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
