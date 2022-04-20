import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { PrimaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
${normalize}
html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 6px 0 0;
    font-family: ${PrimaryFont}
  }
  
  main {
    width: 90%;
    margin: 0 auto;
  }
`