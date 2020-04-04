import { createMuiTheme } from '@material-ui/core/styles'

// App's Custom Theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F15454'
    },
    text: {
      primary: '#CCCCCC',
      secondary: '#AAAAAA',
      tertiary: '#999999'
    },
    background: {
      default: '#333333'
    },
    links: {
      color: '#777777'
    }
  },
  typography: {
    h4: {
      fontSize: '32px'
    }
  },
  default: { marginTop: '28px' }
})
