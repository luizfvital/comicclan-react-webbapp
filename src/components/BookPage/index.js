import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import Ratings from './Ratings'
import BookDetails from './BookDetails'
import BookSummary from './BookSummary'
import OtherRandomBooks from './OtherRandomBooks'
import { CustomDivider } from '../common/CustomDivider'

import { loadSelectedBook } from '../../utils/helper-functions/loadSelectedBook'

import { ReactComponent as BackIcon } from '../../assets/svg/Back_Icon.svg'

import { useStyles } from './styles'

const BookPage = ({
  book: {
    image,
    name,
    year,
    rating,
    writer,
    artist,
    publication,
    owner,
    summary
  },
  book,
  history
}) => {
  window.scroll(0, 0)

  const classes = useStyles()

  const handleClick = () => history.push('/')

  if (Object.keys(book).length === 0) {
    return <div>BOOK NOT FOUND</div>
  }

  return (
    <div className={classes.root}>
      <div onClick={handleClick} className={classes.backLinkContainer}>
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
              {`${name} (${year})`}
            </Typography>
            <Ratings rating={rating} />
          </div>
          <BookDetails
            writer={writer}
            artist={artist}
            publication={publication}
            owner={owner}
          />
          <BookSummary summary={summary} />
        </div>
      </div>
      <CustomDivider />
      <div>
        <Typography variant='h2' className={classes.otherRandomBooks}>
          Other Random Books
        </Typography>
      </div>
      <div style={{ overflowX: 'scroll' }}>
        <OtherRandomBooks />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collection } = state.book
  const { book } = ownProps.match.params
  return { book: loadSelectedBook(collection, book) }
}

export default connect(mapStateToProps)(BookPage)
