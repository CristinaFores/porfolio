import styled from "styled-components";

export const SectionCardStyled = styled.section`
  h3 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 3rem;
    margin: 60px auto 0;
    margin-bottom: 60px;
    line-height: 1.3em;

    @media (max-width: 575px) {
      font-size: 2.2rem;
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

  margin: 100px 100px;

  @media (max-width: 900px) {
    margin: 100px 40px;
  }
`;
