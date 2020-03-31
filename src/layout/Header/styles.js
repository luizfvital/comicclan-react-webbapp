import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  header: {
    maxWidth: '1440px',
    height: '73px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#535353',
    '& img': {
      width: '200px'
    }
  }
}))
