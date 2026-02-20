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
      className={
        containerStyle ?? "flex w-100 md:mt-4 flex-wrap justify-center"
      }
    >
      {skills.length &&
        skills.map((skill) => (
          <li
            key={skill.skill}
            className={`flex rounded-[1.5em] bg-secondaryColor w-[128px] border-2 justify-center md:justify-around border-secondaryColor mr-4 mb-4 p-2 ${
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
