import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
  
  