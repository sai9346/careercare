// src/styles/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global reset and basic styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .main-content {
    flex: 1;
  }

  footer {
    background-color: #f1f1f1; /* Example background color */
    padding: 10px 0;
    text-align: center;
  }
`;

export default GlobalStyle;
