import React from 'react'

// Material UI
import Typography from '@material-ui/core/Typography'

import BookCard from './BookCard'

import { useStyles } from './styles'

const BooksByCategoryDirectory = ({ groupKey, books }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h4' color='textSecondary' style={{}}>
        {groupKey}
      </Typography>
      <div className={classes.scrollContainer}>
        <div
          style={{
            display: 'flex',
            minWidth: 'min-content',
            paddingBottom: '20px'
          }}
        >
          {books.map(book => (
            <BookCard
              key={book.id}
              name={book.name}
              owner={book.owner}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BooksByCategoryDirectory
