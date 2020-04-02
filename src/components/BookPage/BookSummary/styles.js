import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  summary: {
    marginTop: '44px',
    [theme.breakpoints.down(600)]: {
      marginTop: '40px'
    }
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '20px'
  }
}))
