import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  bookDetails: {
    marginTop: '14px'
  },
  detailContainer: {
    display: 'flex',
    marginTop: '11px'
  },
  detailLabel: {
    color: theme.palette.text.tertiary,
    fontSize: '16px'
  },
  detail: {
    color: theme.palette.text.primary,
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '5px'
  }
}))
