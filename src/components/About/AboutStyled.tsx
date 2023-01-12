import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 422px;
  height: 422px;
  background-image: url("./images/image.jpg");
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

  h3 {
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 1.5rem;
    width: 380px;
    margin: 30px auto 0;
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
    font-size: 3rem;
    width: 380px;
    margin: 60px auto 0;
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
    margin-top: 93px;
    margin-bottom: 0;
    background-image: none;
    background-color: #f2f2f2;

    @media (max-width: 700px) {
      height: 298px;
      margin-top: 238px;
    }
  }

  p,
  a {
    font-size: 1.25rem;
    width: 660px;
    margin: 15px auto 0;
    word-wrap: break-word;

    @media (max-width: 750px) {
      padding: 0 20px;
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
`;

export const TextSpanStyled = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 30px;

  a {
    color: ${(props) => props.theme.colors.primary.dark};
    width: fit-content;
    text-transform: uppercase;
    margin-bottom: 25px;
    font-size: 1.2rem;
    margin-bottom: 25px;
    padding: 8px 32px;
    font-weight: bold;
    &:hover {
      border-radius: 4px;
      outline: 0;
      box-shadow: 0 0 8px 0.2rem rgb(27 81 189 / 20%);
      background-color: rgb(132 155 200 / 20%);

      transition: box-shadow 0.25s ease-in-out,
        background-color 0.25s ease-in-out;
    }
  }
`;
