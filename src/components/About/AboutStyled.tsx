import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 422px;
  height: 422px;
  background-image: url("./images/cristina.jpg");
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%;
  margin: -343px auto 0;
  border: #ffffff 8px solid;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 340px;
    height: 340px;
    margin-top: -238px;
  }
`;

export const AboutAvatarStyled = styled.section`
  min-height: 806px;
  color: #111111;
  font-size: 1rem;
  line-height: 1.6;
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  h3 {
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 2rem;
    width: 380px;
    line-height: 1.3em;
    @media (max-width: 700px) {
      padding: 20px;
      width: 100%;
    }
  }

  h2 {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 2rem;
    width: 380px;
    line-height: 1.3em;

    @media (max-width: 700px) {
      padding: 20px;
      width: 100%;
    }
    @media (max-width: 575px) {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 575px) {
    min-height: 724px;
  }

  .one {
    height: 403px;

    margin-bottom: 0;
    background-image: none;
    background-color: #f2f2f2;

    @media (max-width: 700px) {
      height: 298px;
    }
  }

  p {
    font-size: 1.25rem;
    width: 660px;
    margin: 20px auto 0;
    word-wrap: break-word;

    @media (max-width: 750px) {
      padding: 20px;
      width: 100%;
    }
  }

  p,
  h2,
  h3,
  a {
    text-align: center;
  }
`;

export const AboutButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 50px;
  .button {
    --width: 219px;
    --height: 44px;
    --tooltip-height: 35px;
    --tooltip-width: 90px;
    --gap-between-tooltip-to-button: 18px;
    --button-color: ${(props) => props.theme.colors.primary.darkBlue};
    --tooltip-color: #fff0;
    width: var(--width);
    height: var(--height);
    background: var(--button-color);
    position: relative;
    text-align: center;
    border-radius: 0.45em;
    font-family: "Arial";
    transition: background 0.3s;
  }

  .button::before {
    position: absolute;
    content: attr(data-tooltip);
    width: var(--tooltip-width);
    height: var(--tooltip-height);
    background-color: var(--tooltip-color);
    font-size: 0.9rem;
    color: #111;
    border-radius: 0.25em;
    line-height: var(--tooltip-height);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
    left: calc(50% - var(--tooltip-width) / 2);
  }

  .button::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: var(--tooltip-color);
    left: calc(50% - 10px);
    bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
  }

  .button::after,
  .button::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-wrapper,
  .text,
  .icon {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    color: #fff;
  }

  .text {
    top: 0;
  }

  .text,
  .icon {
    transition: top 0.5s;
  }

  .icon {
    color: #fff;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    background: #6c18ff;
  }

  .button:hover .text {
    top: -100%;
  }

  .button:hover .icon {
    top: 0;
  }

  .button:hover:before,
  .button:hover:after {
    opacity: 1;
    visibility: visible;
  }

  .button:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
  }

  .button:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }
`;

export const TextSpanStyled = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
