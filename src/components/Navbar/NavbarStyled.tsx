import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  gap: 2.2rem;
  padding: 20px;
  align-items: center;
  color: ${(props) => props.theme.colors.primary.base};
  font-weight: 700;
  justify-content: end;
  background: ${(props) => props.theme.colors.primary.darkBlue};

  a {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primary.base};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: ${(props) => props.theme.colors.primary.base};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }
`;
