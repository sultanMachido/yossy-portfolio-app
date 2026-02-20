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
    logo: HtmlLogo,
    skill: "HTML5",
  },
  {
    logo: JavascriptLogo,
    skill: "Javascript",
  },
  {
    logo: ReactLogo,
    skill: "React",
  },
  {
    logo: NextJsLogo,
    skill: "Next JS",
  },
  {
    logo: TypescriptLogo,
    skill: "Typescript",
  },
  {
    logo: CssLogo,
    skill: "CSS3",
  },
  {
    logo: "",
    skill: "Node js",
  },
];

function SkillsPage() {
  return (
    <section
      id="skills"
      className="w-[85%] md:w-[80%] mx-auto mt-20 md:mt-40 text-white"
    >
      <h1 className="text-[36px] md:text-[50px] font-bold text-center">
        ABOUT ME
      </h1>
      <div>
        <p className="leading-2 text-white text-lg text-center">
          With over 6 years of experience in web application development, I've
          honed my expertise in crafting robust and efficient solutions using
          React.js, TypeScript, YII, and leveraging various AWS services like
          Cognito, SQS, SNS, and Amplify. Beyond my technical accomplishments, I
          bring a strong set of soft skills to the table that have proven
          invaluable in my career.
        </p>
      </div>
      <div id="skills_section_two">
        <p className="text-white text-lg text-center">
          Technologies i have worked with professionally include:
        </p>
        <SkillsList skills={skills} />
      </div>
    </section>
  );
}

export default SkillsPage;
