import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}; 
  body{
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
