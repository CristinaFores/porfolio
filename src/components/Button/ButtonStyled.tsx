import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: inherit;
  width: 200px;
  padding: 15px;
  border: none;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.base};

  background-color: ${(props) => props.theme.colors.primary.darkBlue};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary.base};
    color: ${(props) => props.theme.colors.primary.darkBlue};
    border: ${(props) => props.theme.colors.primary.darkBlue} solid 2px;
  }
`;

export default ButtonStyled;
