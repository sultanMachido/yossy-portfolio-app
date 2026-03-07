import SkillsImage from "../images/skills.png";
import SkillsList from "./SkillsList";
import ReactLogo from "../images/react.svg";
import NextJsLogo from "../images/nextjs.svg";
import JavascriptLogo from "../images/javascript.svg";
import HtmlLogo from "../images/html.svg";
import TypescriptLogo from "../images/typescript.svg";
import CssLogo from "../images/css3.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    logo: "",
    skill: "Corporate & Business Strategy Development",
  },
  {
    logo: "",
    skill: "Market Entry & Growth Planning",
  },
  {
    logo: "",
    skill: "Programme & Stakeholder Management",
  },
  {
    logo: "",
    skill: "Operations Design & Process Optimisation",
  },
  {
    logo: "",
    skill: "Recruitment, Team Structuring & Staff Training",
  },
  {
    logo: "",
    skill: "KPI, Governance & Accountability Frameworks",
  },
  {
    logo: "",
    skill: "Financial Modelling & Business Planning",
  },
];

function SkillsPage() {
  return (
    <section
      id="skills"
      className="w-[90%] md:w-[80%] mx-auto mt-20 md:mt-40 text-white"
    >
      <h1 className="text-2xl sm:text-4xl text-black font-bold mb-6 text-center">
        ABOUT ME
      </h1>
      <div className="text-black text-sm sm:text-base leading-relaxed sm:leading-loose">
        <p>
          With over 6 years of experience delivering measurable impact across
          corporate institutions and growing businesses. I help organisations
          clarify direction, strengthen operations, and execute with discipline.
        </p>
        <p className="py-4">
          My expertise spans both large institutions and growing businesses to
          translate ideas into structured, measurable action, whether that means
          designing a two to five-year strategy, developing a market entry plan,
          restructuring operations, or building a business from the ground up.
        </p>
        <p>
          My approach combines strategic clarity, practical systems design, and
          hands-on oversight of execution. I focus on ensuring that the strategy
          is not just written but actionable, measured and implemented.
        </p>
      </div>
      <div id="skills_section_two">
        <SkillsList skills={skills} />
      </div>
    </section>
  );
}

export default SkillsPage;
