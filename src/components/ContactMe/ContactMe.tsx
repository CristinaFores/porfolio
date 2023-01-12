import Button from "../Button/Button";
import Input from "../Input/Input";
import { InputLabelStyled } from "../Input/InputStyled";

import { ContactMeStyled, SectionContactStyled } from "./ContactMeStyled";

const ContactMe = (): JSX.Element => {
  return (
    <>
      <SectionContactStyled>
        <h4>Contact me</h4>
        <ContactMeStyled>
          <Input
            type="text"
            placeholder="Your name"
            htmlFor="name"
            textLabel="Name"
            id="name"
          />

          <Input
            type="email"
            placeholder="Email"
            htmlFor="Your email"
            textLabel="Email"
            id="email"
          />
          <InputLabelStyled htmlFor="Write your message">
            Message
          </InputLabelStyled>
          <textarea
            id="description"
            defaultValue=""
            placeholder="Write your message"
          ></textarea>

          <Button text="Send" ariaLabel="Send"></Button>
        </ContactMeStyled>
      </SectionContactStyled>
    </>
  );
};

export default ContactMe;
