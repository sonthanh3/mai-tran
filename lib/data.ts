import postsData from "@/data/posts.json";
import projectsData from "@/data/projects.json";
import profileData from "@/data/profile.json";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  content: string;
  disabled?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: "active" | "progress" | "inactive";
  tags: string[];
  coverImage: string;
  demoUrl: string;
  githubUrl: string;
  content: string;
  disabled?: boolean;
};

export type Profile = typeof profileData;

export function getAllPosts(): Post[] {
  return (postsData as Post[]).filter((p) => !p.disabled);
}

export function getPostBySlug(slug: string): Post | undefined {
  return (postsData as Post[]).find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => !p.disabled);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getProfile(): Profile {
  return profileData;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
