"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        boxShadow: scrolled ? "0 0 10px rgba(0,0,0,0.09)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 6vw",
        }}
      >
        {/* Logo */}
        <Link
          href="https://www.linkedin.com/in/maitran3/"
          style={{ fontSize: "1.2rem", fontWeight: 700, color: "#2d2e32" }}
        >
          Mai 'Amy' 🦩
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#2d2e32",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a66c2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2d2e32")}
              className="hidden md:block"
            >
              {l.label}
            </Link>
          ))}

          <a
            href="/TranMai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#fff",
              border: "2px solid #0a66c2",
              color: "#0a66c2",
              padding: "0.4rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontSize: "0.9rem",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0a66c2";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.color = "#0a66c2";
            }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2d2e32",
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
            padding: "1.5rem 6vw",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontWeight: 600, fontSize: "1rem", color: "#2d2e32" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
