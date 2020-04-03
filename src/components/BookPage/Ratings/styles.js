import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: '2px'
  },
  star: {
    width: '25px',
    marginRight: '8px',
    [theme.breakpoints.down(600)]: {
      width: '18px'
    }
  }
}))
