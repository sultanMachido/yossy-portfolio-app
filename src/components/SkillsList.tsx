import type { ReactNode } from "react";

type Skill = {
  skill: string;
};

type SkillsProp = {
  skills: Skill[];
  children?: ReactNode;
  containerStyle?: string;
  listStyle?: string;
};

function SkillsList({ skills, containerStyle, listStyle }: SkillsProp) {
  return (
    <ul
      className={containerStyle ?? "flex w-100 mt-4 flex-wrap justify-center"}
    >
      {skills.length &&
        skills.map((skill) => (
          <li
            key={skill.skill}
            className={`
       px-5 py-4
       min-h-[70px]
       flex items-center
       text-sm leading-snug rounded-[1.5em] bg-secondaryColor max-w-[400px] border-2 justify-center md:justify-around border-secondaryColor mr-4 mb-4 ${
         listStyle ?? ""
       }`}
          >
            {skill.skill}
          </li>
        ))}
    </ul>
  );
}

export default SkillsList;
