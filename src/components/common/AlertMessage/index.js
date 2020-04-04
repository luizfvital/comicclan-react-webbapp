import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = props => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export const AlertMessage = ({ open, message }) => (
  <Snackbar open={open} autoHideDuration={5000}>
    <Alert severity='error'>{message}</Alert>
  </Snackbar>
)
