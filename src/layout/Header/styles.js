import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1440px',
    height: '73px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#535353',
    '& img': {
      width: '178px'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}))
