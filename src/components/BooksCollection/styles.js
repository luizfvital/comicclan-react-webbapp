import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.default.marginTop
  },
  input: {
    height: '60px',
    border: '3px solid #777777',
    boxSizing: 'border-box',
    borderRadius: '8px'
  }
}))
