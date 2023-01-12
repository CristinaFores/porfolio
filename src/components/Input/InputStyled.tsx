import styled from "styled-components";

export const InputStyled = styled.input`
  border: none;
  border: solid 0.4px ${(props) => props.theme.colors.primary.grey};
  width: 100%;
  margin-bottom: 1.8rem;
  margin-top: 1.25px;
  display: block;
  border-radius: 4px;
  padding: 12px 5px;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;

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
`;

export const InputLabelStyled = styled.label`
  font-weight: 400;
  font-size: 1.5rem;
  padding: 10px 5px;
`;
