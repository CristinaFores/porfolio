import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  height: 100%;
  margin: 0;
  padding:0;
  background-color: ${(props) => props.theme.colors.primary.base}
}


html {
  font-family: "Roboto", sans-serif;
}

img {
  display: block;
  max-width: 100%;
  
}


ul {
    list-style: none;
    list-style-position: outside;
    padding: 0;

}

input,
button,
textarea,
select {
    font-family: "Roboto", sans-serif;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {

  margin: 0;
  font-size: Roboto Mono,Courier,Arial,monospace;

}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
`;
export default GlobalStyle;
