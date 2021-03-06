import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  body {
    font: 62.5%/1.5 "Roboto", "Arial", "Helvetica", sans-serif;
    background: rgb(31, 31, 71);
    color: #fff;
  }
`;

export default GlobalStyle;
