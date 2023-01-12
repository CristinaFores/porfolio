import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 422px;
  height: 422px;
  background-image: url("./images/cristinaPhoto.jpg");
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

  p {
    font-size: 1.25rem;
    width: 660px;
    margin: 30px auto 0;
    word-wrap: break-word;

    @media (max-width: 750px) {
      padding: 0 20px;
      width: 100%;
    }
  }

  p,
  h2,
  h3 {
    text-align: center;

    @media (max-width: 900px) {
    }
  }
`;

export const AboutButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
