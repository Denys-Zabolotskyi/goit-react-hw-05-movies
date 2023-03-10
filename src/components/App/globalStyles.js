import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {margin: 0;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1 {
    font-size: 48px;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
  }
  h2,
  h3,
  h4,
  h5,
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul,
  ol {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
