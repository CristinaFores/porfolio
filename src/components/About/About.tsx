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
      <Element name="about">
        <AboutStyled></AboutStyled>

        <h2>
          Hi!
          <br />
          I am Cristina <br />
        </h2>
        <h3>
          Full-stack
          <b> Web developer </b>
        </h3>
      </Element>
      <TextSpanStyled>
        <p>{article.bio}</p>
      </TextSpanStyled>
      <AboutButtonStyled>
        <TextSpanStyled>
          <Link
            to="https://drive.google.com/file/d/1avl99LNccJtkaG5VJF6HPxPzgLEgyUl2/view?usp=sharing"
            onClick={() =>
              openInNewTab(
                "https://drive.google.com/file/d/1avl99LNccJtkaG5VJF6HPxPzgLEgyUl2/view?usp=sharing"
              )
            }
          >
            To Download CV
          </Link>
        </TextSpanStyled>
      </AboutButtonStyled>
    </AboutAvatarStyled>
  );
};

export default About;
