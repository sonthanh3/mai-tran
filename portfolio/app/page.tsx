import { getAllPosts, getAllProjects, getProfile } from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const profile = getProfile();
  const posts = getAllPosts().slice(0, 3);
  const projects = getAllProjects();

  return (
    <main>
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ExperienceSection profile={profile} />
      <ProjectsSection projects={projects} />
      <BlogSection posts={posts} />
      <ResumeSection profile={profile} />
      <ContactSection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}
