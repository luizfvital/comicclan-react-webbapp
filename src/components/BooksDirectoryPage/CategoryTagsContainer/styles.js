import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: -10,
    zIndex: 100,
    padding: '28px 0',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  },
  activeTag: {
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    display: 'inline-block',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '6px 14px 8px',
    marginRight: '10px',
    borderRadius: '19px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      padding: '4px 12px 6px',
      margin: '0'
    },
    '& > span': {
      userSelect: 'none'
    }
  },
  tag: {
    cursor: 'pointer',
    display: 'inline-block',
    color: '#777777',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '6px 14px 8px',
    marginRight: '10px',
    borderRadius: '19px',
    '&:hover': {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      padding: '4px 12px 6px',
      margin: '0'
    },
    '& > span': {
      userSelect: 'none'
    }
  }
}))
