import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Signin } from './pages/Signin'
import GlobalStyle from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Signin />
    </ThemeProvider>
  </React.StrictMode>,

)
