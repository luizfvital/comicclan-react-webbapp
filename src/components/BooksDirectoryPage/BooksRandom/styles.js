import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '39px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('xs')]: {
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
    },
  },
  scrollContainer: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
  card: {
    marginTop: theme.default.marginTop,
    // marginRight: '20px',
    width: '200px',
    height: '454.63px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  media: {
    width: '200px',
    height: '305.95px',
  },
  content: {
    marginTop: '10px',
    padding: 0,
  },
  bookName: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '22px',
    marginLeft: '5px',
  },
  usernameDiv: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  ownedBy: {
    color: theme.palette.text.tertiary,
    fontSize: '16px',
    marginLeft: '5px',
  },
  userName: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '5px',
  },
}))
