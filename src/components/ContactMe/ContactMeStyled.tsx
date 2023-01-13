import styled from "styled-components";

export const ContactMeStyled = styled.form`
  width: 60rem;
  margin-top: 60px;
  margin-bottom: 60px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2.625rem;
  padding-bottom: 2.625rem;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 20%);
  border-radius: 4px;

  p {
    color: ${(props) => props.theme.colors.primary.base};
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  textarea {
    height: 200px;
    border-radius: 10px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 10px 5px;
    border-color: ${(props) => props.theme.colors.primary.grey};
    margin-bottom: 1.8rem;

    &:focus {
      border-radius: 4px;
      outline: none;
      border-bottom: 1.2px solid ${(props) => props.theme.colors.primary.grey};
      color: #495057;
      background-color: rgba(0, 0, 0, 0.01);
      border-bottom-color: rgb(132, 155, 200);
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(27 81 189 / 25%);
      transition: border-bottom-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    }
  }
`;

export const SectionContactStyled = styled.div`
  h4 {
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
  margin: 0 100px;
  @media (max-width: 900px) {
    margin: 0 40px;
  }
`;
