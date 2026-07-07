"use client";

import { Link2, Mail, FileText } from "lucide-react";
import { Profile } from "@/lib/data";

export default function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="home"
      style={{
        background: "#f9fafb",
        padding: "8vw 6vw",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      {/* Main hero row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap-reverse" as const,
          gap: "2.5rem",
        }}
      >
        {/* Text side */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#2d2e32",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {profile.title} 👋
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#555",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            Hi, I am <strong style={{ fontWeight: 500 }}>{profile.name}</strong>
            , welcome to my portfolio. Please feel free to explore my blogs,
            experience, and skills. I really enjoy working with numbers and am
            excited to keep learning and building my career in accounting. Let's
            connect and discuss how we can collaborate!
          </p>

          {/* CTA links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#0a66c2",
                  color: "#fff",
                  padding: "0.5rem 1.1rem",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#0957a8")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#0a66c2")
                }
              >
                <Link2 size={16} />
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#fff",
                border: "2px solid #2d2e32",
                color: "#2d2e32",
                padding: "0.5rem 1.1rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2d2e32";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.color = "#2d2e32";
              }}
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#6b7280",
                fontWeight: 500,
                fontSize: "0.9rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#0a66c2")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#6b7280")
              }
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>
        </div>

        {/* Morphing blob image */}
        <div
          className="animate-morph"
          style={{
            width: "clamp(200px, 30vw, 340px)",
            height: "clamp(200px, 30vw, 340px)",
            backgroundImage: "url(/images/mai-ava.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "3px solid #2d2e32",
            flexShrink: 0,
            backgroundColor: "#e5e7eb",
          }}
          role="img"
          aria-label={`Profile photo of ${profile.name}`}
        />
      </div>

      {/* Skills strip */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1.5rem",
          paddingTop: "1.5rem",
          borderTop: "2px solid #e5e7eb",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            fontSize: "1rem",
            color: "#2d2e32",
            whiteSpace: "nowrap",
          }}
        >
          Core skills
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {profile.skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
