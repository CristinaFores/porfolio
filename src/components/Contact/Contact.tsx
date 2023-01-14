import { ContactStyled } from "./ContactStyled";
import { Element } from "react-scroll";
const Contact = (): JSX.Element => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Element name="contact">
      <ContactStyled>
        <h4>Contact</h4>
        <div>
          <img
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/cristina-fores-campos/")
            }
            src="../../.././images/linkedinwhite.png"
            alt="linkedin-logo"
          />
          <img
            onClick={() => openInNewTab("https://github.com/CristinaFores")}
            src="../../.././images/githubwhite.png"
            alt="github"
          />

          <p> Cristina Fores © 2023 🧡</p>
        </div>
      </ContactStyled>
    </Element>
  );
};

export default Contact;
