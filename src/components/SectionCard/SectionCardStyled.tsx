import styled from "styled-components";

export const SectionCardStyled = styled.section`
  h3 {
    text-align: center;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 3rem;
    margin: 60px auto 0;
    margin-bottom: 60px;
    line-height: 1.3em;

    @media (max-width: 575px) {
      font-size: 2rem;
    }
  }
  .row {
    display: flex;
    gap: 30px;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  padding: 100px 100px;
  padding-bottom: 80px;
  padding-top: 100px;
  @media (max-width: 900px) {
    margin: 100px 40px;
  }
`;

export const ContaintCardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconsStyled = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  justify-content: center;

  img {
    object-fit: contain;
    transition: all 0.3s ease 0s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
