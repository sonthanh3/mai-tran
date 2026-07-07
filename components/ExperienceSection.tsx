"use client";

import { Profile } from "@/lib/data";

export default function ExperienceSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="experience"
      style={{ background: "#f9fafb", padding: "10vh 6vw" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0a66c2", letterSpacing: "0.05em", marginBottom: "0.4rem" }}>
          EXPERIENCE
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2d2e32" }}>
          Work & Volunteer History
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left sticky label */}
        <div
          style={{
            flex: "0 0 180px",
            position: "sticky",
            top: "5rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#fff",
              border: "2px solid #0a66c2",
              color: "#0a66c2",
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.4rem 0.8rem",
              borderRadius: "0.5rem",
            }}
          >
            {profile.experience.length} Roles
          </span>
        </div>

        {/* Experience cards */}
        <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {profile.experience.map((exp, i) => (
            <div key={i} className="card" style={{ padding: "1.5rem" }}>
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827" }}>
                  {exp.title}
                </h3>
                <time style={{ fontSize: "0.8rem", color: "#6b7280", whiteSpace: "nowrap" }}>
                  {exp.period}
                </time>
              </div>

              <p style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "1rem" }}>
                <strong>{exp.company}</strong> — {exp.location} ({exp.type})
              </p>

              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "1.2rem",
                  fontSize: "0.85rem",
                  color: "#374151",
                  lineHeight: 1.7,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  marginBottom: "1rem",
                }}
              >
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
