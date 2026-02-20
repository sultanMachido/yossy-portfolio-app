import Header from "../components/Header";
import HeroSection from "../components/HeroPage";
import BackgroundAnimation from "../components/BackgroundAnim";
import SkillsSection from "../components/SkillsPage";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Nav from "../components/Nav";
import { useEffect } from "react";

function IntroPage() {
  return (
    <section className="flex">
      <div className="w-[10%]">
        <Nav />
      </div>
      <div className="w-[80%] ml-5 md:ml-0">
        <HeroSection />
        <SkillsSection />
        <Projects />
        <Articles />
      </div>
    </section>
  );
}

export default IntroPage;
