import React, { useEffect } from "react";
import { gsap } from "gsap";
import ContactLinks from "./ContactLinks";
import yossy from "../images/yossy.jpeg";

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
      <div className="w-[300px] mx-auto">
        <img
          src={yossy}
          alt="my-picture"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1
          className={`text-center font-bold text-black-500
       text-3xl sm:text-4xl md:text-6xl lg:text-7xl
       leading-tight sm:leading-tight md:leading-[1.1]
       px-4 md:pl-10`}
        >
          OMOYOSOLA ODUKOYA <br />
          (Yoshi)
        </h1>
        <p
          id="second-paragraph"
          className="text-center text-white px-10 py-5 font-bold md:text-2xl"
        >
          Strategy, Operations & Transformation Consultant
        </p>
        <ContactLinks />
      </div>
    </div>
  );
}

export default HeroPage;
