import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.0em;
    h1 {
      font-weight: 700;
      font-size: 3.0em;
    }
  }
  * {
    font-weight: 600;
    font-family: 'Source Sans Pro', Helvetica, serif;
  }
  body {
    background: ${(props) => props.theme.primaryBackground};
    margin: 0;
  }
`;

export default GlobalStyle;
