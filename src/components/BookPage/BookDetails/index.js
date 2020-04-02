import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const BookDetails = () => {
  const classes = useStyles()
  return (
    <div className={classes.bookDetails}>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Writer:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          Foo W. Riter
        </Typography>
      </div>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Artist:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          Bar A. Rtist
        </Typography>
      </div>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Publication:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          Acme Co.
        </Typography>
      </div>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Owner:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          Comicdude71
        </Typography>
      </div>
    </div>
  )
}

export default BookDetails
