import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StyleContextProvider from "./contexts/StyleContext";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: black;
    color: white;
  }

  p {
    line-height: 1.6;
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
