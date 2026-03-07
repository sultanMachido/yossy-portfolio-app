import React, { useEffect } from "react";
import { gsap } from "gsap";
import DevIllustration from "../images/dev.png";
import style from "./styles/HeroPage.module.css";
import ContactLinks from "./ContactLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function HeroPage() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      document.getElementById("first-paragraph"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );
    timeline.fromTo(
      document.getElementById("second-paragraph"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <div className="mt-10 md:mt-20">
      <div>
        <h1
          className={`text-center font-bold text-secondaryColor
       text-3xl sm:text-4xl md:text-6xl lg:text-7xl
       leading-tight sm:leading-tight md:leading-[1.1]
       px-4 md:pl-10`}
        >
          OMOYOSOLA ODUKOYA(Yoshi)
        </h1>
        <p
          id="second-paragraph"
          className="text-center text-white px-10 font-bold md:text-lg"
        >
          Strategy, Operations & Transformation Consultant
        </p>
        <ContactLinks />

        {/* <button className="font-bold shadow-md block mx-auto mt-10 w-[80%] md:w-[350px] h-[50px] bg-black text-white rounded-[50px]">
          <a href="/Adesina Martins CV.pdf" id="resume">
            Download Resume
          </a>
        </button> */}
      </div>
    </div>
  );
}

export default HeroPage;
