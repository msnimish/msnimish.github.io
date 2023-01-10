import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from "./theme/styles";
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
console.log(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme = {theme}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </ChakraProvider>
);
