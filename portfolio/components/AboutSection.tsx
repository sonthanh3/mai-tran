"use client";

import { GraduationCap, Award } from "lucide-react";
import { Profile } from "@/lib/data";

export default function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="about"
      style={{
        background: "#fff",
        padding: "10vh 6vw",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      {/* Section header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#0a66c2",
            letterSpacing: "0.05em",
          }}
        >
          ABOUT ME
        </p>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "#2d2e32",
          }}
        >
          A little about myself
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "flex-start",
        }}
      >
        {/* Bio text */}
        <div style={{ flex: "1 1 300px" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "#374151",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            {profile.bio}
          </p>
          <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.8 }}>
            Balancing school with part-time work has taught me how to analyze
            numbers, stay organized, and work well under pressure. I look
            forward to bringing this strong work ethic and my accounting skills
            to future finance opportunities and internships. Let's connect!
          </p>
        </div>

        {/* Education card */}
        <div
          style={{
            flex: "1 1 280px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {profile.education.map((edu, i) => (
            <div key={i} className="card" style={{ padding: "1.25rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.75rem",
                }}
              >
                <GraduationCap size={20} color="#0a66c2" />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#2d2e32",
                  }}
                >
                  {edu.degree}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#6b7280",
                  marginBottom: "0.5rem",
                }}
              >
                {edu.school} · {edu.period}
              </p>
              {edu.gpa && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#0a66c2",
                    marginBottom: "0.75rem",
                  }}
                >
                  GPA: {edu.gpa}
                </p>
              )}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {edu.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      color: "#374151",
                    }}
                  >
                    <Award
                      size={14}
                      color="#0a66c2"
                      style={{ marginTop: 3, flexShrink: 0 }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
