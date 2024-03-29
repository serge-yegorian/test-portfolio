import Image from "next/image";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
    <div className="container mx-auto py-4 px-12 mt-24">
      <HeroSection/>
      <AchievementsSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
    </div>
    <Footer/>
  </main>
  );
}
