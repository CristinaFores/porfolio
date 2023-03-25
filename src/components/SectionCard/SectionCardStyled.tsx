import styled from "styled-components";

export const SectionCardStyled = styled.section`
  padding: 60px 30px;
  h3 {
    text-align: center;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 3rem;
    padding-bottom: 30px;
    line-height: 1.3em;
    text-transform: uppercase;
    @media (max-width: 575px) {
      font-size: 2rem;
    }
  }
  .row {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    gap: 2rem;
    @media (max-width: 800px) {
      flex-direction: column;
      gap: 70px;
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
