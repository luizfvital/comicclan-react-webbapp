import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const BookSummary = ({ summary }) => {
  const classes = useStyles()
  const summaryParts = summary.split('\n')

  return (
    <div className={classes.summary}>
      {summaryParts.map(part => (
        <Typography key={uuidv4()} variant='body1' className={classes.text}>
          {part}
        </Typography>
      ))}
    </div>
  )
}

export default BookSummary
