import React from 'react'

// Material UI
import Typography from '@material-ui/core/Typography'

import BookCard from './BookCard'

import { useStyles } from './styles'

const CategoryListContainer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h4' color='textSecondary' style={{}}>
        2019
      </Typography>
      <div className={classes.scrollContainer}>
        <div
          style={{
            display: 'flex',
            minWidth: 'min-content',
            paddingBottom: '20px'
          }}
        >
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  )
}

export default CategoryListContainer
