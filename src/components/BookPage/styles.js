import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  backLinkContainer: {
    marginTop: theme.default.marginTop,
    marginLeft: '-8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer'
  },
  backIcon: {
    width: '18px'
  },
  backLinkText: {
    color: theme.palette.links.color,
    marginBottom: '5px',
    textDecoration: 'underline',
    fontSize: '20px'
  },
  bookContainer: {
    marginTop: theme.default.marginTop,
    display: 'flex',
    marginBottom: '72px',
    [theme.breakpoints.down(1200)]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },
  imgContainer: {
    display: 'flex',
    width: '340px',
    minWidth: '340px',
    marginRight: '20px',
    height: '519.92px',
    '& img': {
      width: '100%'
    },
    [theme.breakpoints.down(600)]: {
      minWidth: '200px',
      width: '200px',
      height: '305.95px'
    }
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '1100px'
  },
  bookName: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    marginRight: '20px',
    [theme.breakpoints.down(1200)]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down(600)]: {
      fontSize: '26px'
    }
  },
  bookNameRating: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down(1200)]: {
      flexWrap: 'wrap',
      marginTop: '40px'
    }
  },
  otherRandomBooks: {
    fontSize: '32px',
    color: theme.palette.text.secondary,
    marginRight: '20px',
    [theme.breakpoints.down(1200)]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down(600)]: {
      fontSize: '26px'
    }
  }
}))
