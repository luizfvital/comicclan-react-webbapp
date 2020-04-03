import React from 'react'

import BookCard from '../../common/BookCard'

import { useStyles } from './styles'

const OtherRandomBooks = () => {
  const classes = useStyles()
  return (
    <div className={classes.booksContainer}>
      <BookCard
        name='Captain Girl #872'
        owner='Greens'
        image='https://comicclan.vett.io/images/image-placeholder2.svg'
      />
      <BookCard
        name='Captain Girl #872'
        owner='Greens'
        image='https://comicclan.vett.io/images/image-placeholder2.svg'
      />
      <BookCard
        name='Captain Girl #872'
        owner='Greens'
        image='https://comicclan.vett.io/images/image-placeholder2.svg'
      />
      <BookCard
        name='Captain Girl #872'
        owner='Greens'
        image='https://comicclan.vett.io/images/image-placeholder2.svg'
      />
      <BookCard
        name='Captain Girl #872'
        owner='Greens'
        image='https://comicclan.vett.io/images/image-placeholder2.svg'
      />
    </div>
  )
}

export default OtherRandomBooks
