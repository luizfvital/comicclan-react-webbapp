import React from 'react'

import Typography from '@material-ui/core/Typography'

import Ratings from './Ratings'
import BookDetails from './BookDetails'
import BookSummary from './BookSummary'

import { ReactComponent as BackIcon } from '../../assets/svg/Back_Icon.svg'

import { useStyles } from './styles'

import image from '../../assets/png/imag_placeholder1@2x.png'

const BookPage = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.backLinkContainer}>
        <BackIcon className={classes.backIcon} />
        <Typography variant='body1' className={classes.backLinkText}>
          Back to collection
        </Typography>
      </div>
      <div className={classes.bookContainer}>
        <div className={classes.imgContainer}>
          <img src={image} alt='Book' />
        </div>
        <div className={classes.bookInfo}>
          <div className={classes.bookNameRating}>
            <Typography variant='h2' className={classes.bookName}>
              Book Name (2019)
            </Typography>
            <Ratings />
          </div>
          <BookDetails />
          <BookSummary />
        </div>
      </div>
    </div>
  )
}

export default BookPage
