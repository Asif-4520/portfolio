import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Timeline } from "@/components/Timeline/Timeline";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-text">
      <LoadingScreen />

      <SmoothScroll />

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}