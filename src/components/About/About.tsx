import { Element, Link } from "react-scroll";

import {
  AboutStyled,
  AboutAvatarStyled,
  TextSpanStyled,
  AboutButtonStyled,
} from "./AboutStyled";
const article = {
  bio: "I have been working on small and medium projects, developing skills in both front-end and back-end, such as Nodejs. I have also learned about the use of non-relational databases such as MongoDB, and have developed skills in implementing secure and scalable web applications. I love to learn and am always looking for new opportunities to improve my skills.",
  link: "Download CV",
};
const About = (): JSX.Element => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <AboutAvatarStyled>
      <div className="one"></div>
      <Element name="about" className="about">
        <AboutStyled></AboutStyled>

        <h3>
          Hi!
          <br />
          I am Cristina <br />
        </h3>
        <h2>
          Full-stack
          <b> Web developer </b>
        </h2>
      </Element>
      <TextSpanStyled>
        <p>{article.bio}</p>
      </TextSpanStyled>
      <AboutButtonStyled>
        <TextSpanStyled></TextSpanStyled>
        <div className="button">
          <div className="button-wrapper">
            <div className="text">
              {" "}
              <Link
                to="https://drive.google.com/file/d/1avl99LNccJtkaG5VJF6HPxPzgLEgyUl2/view?usp=sharing"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1avl99LNccJtkaG5VJF6HPxPzgLEgyUl2/view?usp=sharing"
                  )
                }
              >
                Download CV
              </Link>
            </div>
            <span className="icon">
              <svg
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1avl99LNccJtkaG5VJF6HPxPzgLEgyUl2/view?usp=sharing"
                  )
                }
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                height="2em"
                width="2em"
                role="img"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="none"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </AboutButtonStyled>
    </AboutAvatarStyled>
  );
};

export default About;
