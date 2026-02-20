import { useEffect, useState } from "react";

export const useScrollPosition = (sectionIds: string[]) => {
  const [scrollPosition, setScrollPosition] = useState("");
  const getScrollPosition = (sectionOfPageId: string) => {
    const skillsSection = document.getElementById(sectionOfPageId);
    const rect = skillsSection?.getBoundingClientRect();
    if (rect && rect?.y <= 0 && rect?.y >= -rect.height) {
      console.log(rect?.y, "sect");
      console.log(window.scrollY, "window");
      return skillsSection?.id;
    }

    return "";
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const ids = sectionIds.map((id) => {
        return getScrollPosition(id);
      });
      if (ids.every((element) => element === "")) {
        setScrollPosition("");
      } else {
        const sectionId = ids.filter((id) => id !== "");
        if (sectionId[0]) {
          setScrollPosition(`#${sectionId[0]}`);
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", (e) => {
        sectionIds.forEach((id) => {
          getScrollPosition(id);
        });
      });
    };
  }, []);
  return { scrollPosition };
};
