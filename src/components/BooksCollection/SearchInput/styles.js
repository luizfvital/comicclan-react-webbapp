import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: { position: 'relative' },
  input: {
    height: '60px',
    paddingLeft: '58px',
    color: '#777777',
    fontSize: '20px',
    border: '3px solid #777777',
    boxSizing: 'border-box',
    borderRadius: '8px',
    '&::placeholder': {
      color: '#777777',
      fontSize: '20px'
    }
  },
  image: {
    position: 'absolute',
    width: '32px',
    top: '15px',
    left: '15px'
  }
}))
