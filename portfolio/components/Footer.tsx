"use client";

import { Link2, Mail } from "lucide-react";
import { Profile } from "@/lib/data";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer
      style={{
        background: "#2d2e32",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "2rem 6vw",
      }}
    >
      <p style={{ fontSize: "0.875rem", fontWeight: 500 }}>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "#fff", opacity: 1, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.65")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            <Link2 size={24} />
          </a>
        )}
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          style={{ color: "#fff", opacity: 1, transition: "opacity 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.65")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
}
