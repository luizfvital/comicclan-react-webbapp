import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const BookDetails = props => {
  const classes = useStyles()
  const { writer, artist, publication, owner } = props
  return (
    <div className={classes.bookDetails}>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Writer:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          {writer}
        </Typography>
      </div>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Artist:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          {artist}
        </Typography>
      </div>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Publication:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          {publication}
        </Typography>
      </div>
      <div className={classes.detailContainer}>
        <Typography variant='body2' className={classes.detailLabel}>
          Owner:
        </Typography>
        <Typography variant='body2' className={classes.detail}>
          {owner}
        </Typography>
      </div>
    </div>
  )
}

export default BookDetails
