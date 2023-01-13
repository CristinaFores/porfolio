import { ContactStyled } from "./ContactStyled";

const Contact = (): JSX.Element => {
  return (
    <ContactStyled>
      <h4>Contact</h4>
      <div>
        <img src="../../.././images/linkedin-logo.svg" alt="linkedin-logo" />
        <img src="../../.././images/github.svg" alt="github" />
      </div>
    </ContactStyled>
  );
};

export default Contact;
