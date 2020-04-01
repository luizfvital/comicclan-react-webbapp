import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import './index.css'
import App from './App'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './appTheme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
