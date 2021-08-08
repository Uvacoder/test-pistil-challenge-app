import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 70.5%;
  }

  body {
    font-family: 'Roboto',sans-serif;
    background: linear-gradient(to bottom,rgba(230,234,255,1) 0%,rgba(230,234,255,0) 100%);
  }
`;
