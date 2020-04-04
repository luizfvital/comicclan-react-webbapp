import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import BookCard from '../../common/BookCard'

import { useStyles } from './styles'

const OtherRandomBooks = ({ randomBooks }) => {
  const classes = useStyles()

  return (
    <div className={classes.booksContainer}>
      {randomBooks.map(book => (
        <BookCard
          key={uuidv4()}
          classes={classes}
          id={book.id}
          name={book.name}
          owner={book.owner}
          image={book.image}
        />
      ))}
    </div>
  )
}

export default OtherRandomBooks
