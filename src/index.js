import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StyleContextProvider from "./contexts/StyleContext";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import frenchStucco from './images/french-stucco.png';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    /* background-image: url(${frenchStucco}); */
    background-repeat: repeat;
  }

  h2 {
    color: #ff4d4f;
    text-transform: uppercase;
    font-size: 1rem;
  }

  p {
    line-height: 1.6;
  }

  button {
    text-transform: uppercase;
  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <StyleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleContextProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
