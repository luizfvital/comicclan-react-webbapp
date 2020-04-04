import React from 'react'

import Typography from '@material-ui/core/Typography'

import BookCard from '../../common/BookCard'
import { CustomDivider } from '../../common/CustomDivider'

import { useStyles } from './styles'

const BooksByCategory = ({ groupKey, books }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h4' color='textSecondary'>
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
              classes={classes}
              id={book.id}
              name={book.name}
              owner={book.owner}
              image={book.image}
            />
          ))}
        </div>
      </div>
      <CustomDivider />
    </div>
  )
}

export default BooksByCategory
