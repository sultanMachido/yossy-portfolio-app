import ProjectList from "./ProjectList";
import HccProject from "../images/project-1.png";
import ZipuProject from "../images/zipu.png";
import HccAdmin from "../images/hccadmin.png";
import Infographic from "../images/infographic.png";
import shapecreator from "../images/shapecreator.png";

const projects = [
  {
    image: Infographic,
    title: "Cigarette Pollution Infographic",
    link: "https://cigarette-pollution-infographic.netlify.app/",
  },
  {
    image: ZipuProject,
    title: "Zipu Transport",
    link: "https://ziputransport.netlify.app/",
  },
  {
    image: HccAdmin,
    title: "Hcc Attendance App Admin",
    link: "https://admin-hcc.netlify.app/#/dashboard",
  },
  {
    image: HccProject,
    title: "Hcc Attendance App",
    link: "https://hcc-database-app.netlify.app/",
  },
  {
    image: shapecreator,
    title: "Shape Creator",
    link: "https://objective-hugle-f129ea.netlify.app",
  },
];

const Projects = () => {
  return (
    <section className="h-auto mt-20 md:mt-40" id="portfolio">
      <h1 className="text-[36px] md:text-[50px] font-bold text-center text-white">
        PROJECTS
      </h1>
      <ProjectList projects={projects} />
    </section>
  );
};

export default Projects;
