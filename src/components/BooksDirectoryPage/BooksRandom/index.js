import React from 'react'

import BookCard from '../../common/BookCard'

import { useStyles } from './styles'

const BooksRandom = ({ collection }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {collection &&
        collection.map(book => (
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
  )
}

export default BooksRandom
