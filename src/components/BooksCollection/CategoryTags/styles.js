import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  categoryTagsContainer: {
    marginTop: '28px',

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }
}))
