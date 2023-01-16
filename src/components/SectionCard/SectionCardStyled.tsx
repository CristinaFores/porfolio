import styled from "styled-components";

export const SectionCardStyled = styled.section`
  padding: 30px 0;
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
    justify-content: center;
    padding-bottom: 30px;
    @media (max-width: 800px) {
      flex-direction: column;
      gap: 60px;
    }
  }
`;

export const ContaintCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconsStyled = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 2rem;

  img {
    object-fit: contain;
    transition: all 0.3s ease 0s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
