import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    html {
      box-sizing: border-box;
      text-align: center;
    }

    *, *::before, *::after {
      box-sizing: inherit;
      font-family: 'Cabinet Grotesk', sans-serif;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul, div, main, nav, section, header, footer {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    ol, ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    a, a:visited, a:hover {
      text-decoration: none;
      font-family: 'Cabinet Grotesk', sans-serif;
    }

    body {
      font-family: 'Cabinet Grotesk', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      @media screen and (max-width: 375px) {

        overflow: scroll;

        height: 767px !important;
      }
    }

    code {
      font-family: 'Cabinet Grotesk', sans-serif;
    }
`;

export default GlobalStyles;