import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(


  <React.StrictMode>
    <GlobalStyle />
    <App />

  </React.StrictMode>
)
