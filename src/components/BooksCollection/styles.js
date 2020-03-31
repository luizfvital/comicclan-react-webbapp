import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '28px'
  },
  input: {
    height: '60px',
    border: '3px solid #777777',
    boxSizing: 'border-box',
    borderRadius: '8px'
  },
  categoryTagsContainer: {
    marginTop: '28px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }
}))
