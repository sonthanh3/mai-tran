import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getProfile } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const profile = getProfile();
  return {
    title: `${profile.name} | ${profile.title}`,
    description: profile.bio,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const profile = getProfile();
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
