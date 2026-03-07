import { link } from "fs";
import firstArticle from "../images/Picture1.png";
import secondArticle from "../images/Picture2.png";
import thirdArticle from "../images/Picture3.png";
import fourthArticle from "../images/Picture4.png";
import fifthArticle from "../images/Picture5.webp";

const articles = [
  {
    title:
      "If It Is Not Documented, It Does Not Exist: Why Every Business Must Build a Culture of Documentation",
    link: "https://phillipsconsulting.net/articles_post/if-it-is-not-documented-it-does-not-exist-why-every-business-must-build-a-culture-of-documentation/",
    picture: firstArticle,
  },
  {
    title:
      "Corporate Strategy for the SDGs: Navigating the Future with Strategic Development",
    link: "https://phillipsconsulting.net/articles_post/corporate-strategy-for-the-sdgs-navigating-the-future-with-strategic-development/",
    picture: secondArticle,
  },
  {
    title: "The Strategy of Soft Life: Balancing Ambition and Ease",
    link: "https://www.linkedin.com/pulse/strategy-soft-life-balancing-ambition-ease-omoyosola-odukoya-99gef/",
    picture: thirdArticle,
  },
  {
    title:
      "Declutter Your Space, Declutter Your Mind: Starting 2026 with Intention",
    link: "https://medium.com/@yosolaoduks/declutter-your-space-declutter-your-mind-starting-2026-with-intention-3ab2e0ed374f",
    picture: fourthArticle,
  },
  {
    title: "Adapting to Change: The Skill No One Teaches You",
    link: "https://medium.com/@yosolaoduks/adapting-to-change-the-skill-no-one-teaches-you-21d92b0c2cd8",
    picture: fifthArticle,
  },
];

const Articles = () => {
  return (
    <section className=" mt-[100px] mb-10" id="articles">
      <h1 className="text-2xl sm:text-4xl text-black font-bold text-center text-white">
        ARTICLES
      </h1>
      <div className="flex flex-wrap justify-center">
        {articles.map((article, index) => (
          <div key={index} className="mb-10 w-[300px]  md:ml-10">
            <div className="w-[300px] h-64 overflow-hidden">
              <img
                src={article.picture}
                alt="articles image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-[10px]">
              <a href={article.link} className="font-bold text-md">
                {article.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
