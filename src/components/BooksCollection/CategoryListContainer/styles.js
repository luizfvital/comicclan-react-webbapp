import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '80px'
  },
  scrollContainer: { overflowX: 'scroll', overflowY: 'hidden' }
}))
