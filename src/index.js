import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './appTheme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
