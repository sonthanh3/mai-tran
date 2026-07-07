"use client";

import { MapPin, Mail, Link2 } from "lucide-react";
import { Profile } from "@/lib/data";

export default function ContactSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="contact"
      style={{
        background: "#f9fafb",
        padding: "10vh 6vw",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0a66c2", letterSpacing: "0.05em" }}>
          CONTACT
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2d2e32" }}>
          Get in touch
        </h2>
        <p style={{ fontSize: "1rem", color: "#6b7280", maxWidth: 480 }}>
          Open to internship opportunities, accounting roles, and collaborative projects. Don&apos;t hesitate to reach out.
        </p>
      </div>

      {/* Contact cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
        {/* Location */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            flex: "1 1 220px",
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              background: "#eff6ff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin size={22} color="#0a66c2" />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#2d2e32", marginBottom: "0.2rem" }}>
              Location
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>{profile.location}</p>
          </div>
        </div>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            flex: "1 1 220px",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              background: "#eff6ff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Mail size={22} color="#0a66c2" />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#2d2e32", marginBottom: "0.2rem" }}>
              Email
            </p>
            <p style={{ fontSize: "0.9rem", color: "#0a66c2" }}>{profile.email}</p>
          </div>
        </a>

        {/* LinkedIn */}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem 1.5rem",
              flex: "1 1 220px",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: "#eff6ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Link2 size={22} color="#0a66c2" />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#2d2e32", marginBottom: "0.2rem" }}>
                LinkedIn
              </p>
              <p style={{ fontSize: "0.9rem", color: "#0a66c2" }}>View profile →</p>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
