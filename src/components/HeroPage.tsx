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
          className={`text-center text-[50px] md:text-[90px] md:pl-10 p-[0px] text-secondaryColor bold font-bold`}
        >
          OMOYOSOLA ODUKOYA
        </h1>
        <p
          id="second-paragraph"
          className="text-center text-white px-10 font-bold md:text-lg"
        >
          A FRONTEND, BACKEND, & MOBILE APP DEVELOPER
        </p>
        <ContactLinks />

        <button className="font-bold shadow-md block mx-auto mt-10 w-[80%] md:w-[350px] h-[50px] bg-black text-white rounded-[50px]">
          <a href="/Adesina Martins CV.pdf" id="resume">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeroPage;
