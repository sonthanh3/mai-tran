"use client";

import { FileText, Download } from "lucide-react";
import { Profile } from "@/lib/data";

export default function ResumeSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="resume"
      style={{
        background: "#fff",
        padding: "10vh 6vw",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0a66c2", letterSpacing: "0.05em", marginBottom: "0.4rem" }}>
            RESUME
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2d2e32" }}>
            My qualifications at a glance
          </h2>
        </div>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#0a66c2",
            color: "#fff",
            padding: "0.6rem 1.25rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "0.9rem",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0957a8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a66c2")}
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Two-column layout */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {/* Education */}
        <div style={{ flex: "1 1 280px" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#2d2e32",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "#0a66c2" }}>🎓</span> Education
          </h3>
          {profile.education.map((edu, i) => (
            <div
              key={i}
              style={{
                borderLeft: "3px solid #0a66c2",
                paddingLeft: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#111827" }}>{edu.degree}</p>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0.2rem 0" }}>
                {edu.school} · {edu.period}
              </p>
              {edu.gpa && (
                <p style={{ fontSize: "0.82rem", color: "#0a66c2", fontWeight: 500, marginBottom: "0.4rem" }}>
                  GPA: {edu.gpa}
                </p>
              )}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                {edu.highlights.map((h, j) => (
                  <li key={j} style={{ fontSize: "0.82rem", color: "#374151" }}>
                    • {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience summary */}
        <div style={{ flex: "1 1 280px" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#2d2e32",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "#0a66c2" }}>💼</span> Experience
          </h3>
          {profile.experience.map((exp, i) => (
            <div
              key={i}
              style={{
                borderLeft: "3px solid #e5e7eb",
                paddingLeft: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#111827" }}>{exp.title}</p>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0.2rem 0 0.5rem" }}>
                {exp.company} · {exp.period}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                {exp.highlights.slice(0, 2).map((h, j) => (
                  <li key={j} style={{ fontSize: "0.82rem", color: "#374151" }}>
                    • {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={{ flex: "1 1 260px" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#2d2e32",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "#0a66c2" }}>🛠️</span> Skills
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {profile.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                  border: "1px solid #bfdbfe",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PDF preview prompt */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          background: "#f9fafb",
          border: "1px dashed #d1d5db",
          borderRadius: "0.75rem",
          padding: "1.25rem 1.5rem",
        }}
      >
        <FileText size={28} color="#9ca3af" />
        <div>
          <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#374151" }}>Full resume available as PDF</p>
          <p style={{ fontSize: "0.83rem", color: "#9ca3af" }}>
            Download or view the complete document with all details.
          </p>
        </div>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            color: "#0a66c2",
            fontWeight: 600,
            fontSize: "0.88rem",
            whiteSpace: "nowrap",
          }}
        >
          Open PDF <FileText size={14} />
        </a>
      </div>
    </section>
  );
}
