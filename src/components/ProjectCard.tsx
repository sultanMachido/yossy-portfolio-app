import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type ProjectInfoType = {
  projectInfo: { image: string; title: string; link: string };
};
const ProjectCard = ({ projectInfo }: ProjectInfoType) => {
  return (
    <li
      className={`list-none w-100 md:w-3/12 bg-secondaryColor rounded-md mx-[10px] mb-[10px]`}
    >
      <div>
        <div>
          <img src={projectInfo.image} />
        </div>
        <div>
          <a href={projectInfo?.link} className="p-10 text-white bold">
            {projectInfo?.title}
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
