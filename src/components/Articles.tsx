import firstArticle from "../images/article1.png";
import secondArticle from "../images/article2.png";
import thirdArticle from "../images/article3.png";
import fourthArticle from "../images/article4.png";

const articles = [
  {
    title: "The basic Git Workflow you need to know as a Software Engineer",
    link: "https://medium.com/@adeshinamartinopeoluwa/the-basic-git-workflow-you-need-to-know-as-a-software-engineer-ced911310ed8",
    picture: firstArticle,
  },
  {
    title: "Importance of unique keys in React js",
    link: "https://medium.com/@adeshinamartinopeoluwa/importance-of-unique-keys-in-react-js-2474f0859f80",
    picture: secondArticle,
  },
  {
    title: "Configure AWS Cognito for End-to-End Test on Cypress",
    link: "https://medium.com/@adeshinamartinopeoluwa/configure-aws-cognito-for-end-to-end-test-on-cypress-4f45846457b1",
    picture: thirdArticle,
  },
  {
    title: "Understanding Unix Timestamp, UTC, and Date Object in Javascript",
    link: "https://medium.com/@adeshinamartinopeoluwa/understanding-unix-timestamp-utc-and-date-object-in-javascript-c0ef9f38f7e9",
    picture: fourthArticle,
  },
];

const Articles = () => {
  return (
    <section className=" mt-[100px] mb-10" id="articles">
      <h1 className="text-[36px] md:text-[50px] font-bold text-center text-white">
        ARTICLES
      </h1>
      <div className="flex flex-wrap justify-center">
        {articles.map((article, index) => (
          <div key={index} className="mb-10 w-[300px]  md:ml-10">
            <div className="w-[300px]">
              <img src={article.picture} alt="articles image" />
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
