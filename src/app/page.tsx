import About from "@/components/AboutSection";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";


export default function Home() {
  return (
    
    <>
    <Header />
    <About />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
    </>
  );
}
