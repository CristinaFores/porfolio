import styled from "styled-components";

export const ContactStyled = styled.section`
  padding: 80px 80px 20px 80px;
  background-color: ${(props) => props.theme.colors.primary.darkBlue};
  color: ${(props) => props.theme.colors.primary.base};
  h4 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 3rem;
    line-height: 1rem;
    margin-bottom: 60px;
    color: #ffa54d;
  }

  div {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
  }

  img {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease 0s;

    &:hover {
      transform: scale(1.2);
    }
  }

  p {
    font-size: 1.5rem;
  }
`;
