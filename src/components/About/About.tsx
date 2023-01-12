import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  AboutStyled,
  AboutAvatarStyled,
  AboutButtonStyled,
  TextSpanStyled,
} from "./AboutStyled";
const article = {
  bio: "I have been working on small and medium projects, developing skills in both front-end and back-end, such as Nodejs. I have also learned about the use of non-relational databases such as MongoDB, and have developed skills in implementing secure and scalable web applications. I love to learn and am always looking for new opportunities to improve my skills.",
  link: "Download CV",
};
const About = (): JSX.Element => {
  const [showText, setshowText] = useState(false);

  return (
    <AboutAvatarStyled>
      <div className="one"></div>
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
      <TextSpanStyled>
        <p>{showText ? article.bio : article.bio.substring(0, 0) + ""}</p>
        <Link to={"/project"}>
          {showText ? article.link : article.bio.substring(0, 0) + ""}
        </Link>
      </TextSpanStyled>
      <AboutButtonStyled>
        <Button
          action={() => setshowText(!showText)}
          text={!showText ? "Read More" : "Read Less"}
          ariaLabel={"Read"}
        />
      </AboutButtonStyled>
    </AboutAvatarStyled>
  );
};

export default About;
