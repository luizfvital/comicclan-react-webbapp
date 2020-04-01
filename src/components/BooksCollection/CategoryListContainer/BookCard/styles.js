import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.default.marginTop,
    marginRight: '96px',
    width: '200px',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  media: {
    width: '200px',
    height: '305.95px'
  },
  content: {
    marginTop: '10px',
    padding: 0
  },
  bookName: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '22px'
  },
  usernameDiv: {
    display: 'flex'
  },
  ownedBy: {
    color: theme.palette.text.tertiary,
    fontSize: '16px'
  },
  userName: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '5px'
  }
}))
