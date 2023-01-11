import { useState } from "react";
import { AboutStyled, AboutAvatarStyled } from "./AboutStyled";
const article = {
  disc: " he estado trabajando en proyectos pequeños y medianos, desarrollando habilidades tanto en el front-end como en el back-end, como Nodejs. También he aprendido sobre el uso de bases de datos no relacionales como MongoDB, y he desarrollado habilidades en la implementación de aplicaciones web seguras y escalables. Me encanta aprender y siempre estoy buscando nuevas oportunidades para mejorar mis habilidades.",
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
        <b> web developer </b>
      </h3>
      <p>{showText ? article.disc : article.disc.substr(0, 1) + ""}</p>
      <button onClick={() => setshowText(!showText)}>
        {!showText ? "Read More" : "Read Less"}
      </button>
    </AboutAvatarStyled>
  );
};

export default About;
