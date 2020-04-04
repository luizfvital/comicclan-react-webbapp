import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import Ratings from './Ratings'
import BookDetails from './BookDetails'
import BookSummary from './BookSummary'
import OtherRandomBooks from './OtherRandomBooks'
import { CustomDivider } from '../common/CustomDivider'
import { Container } from '../common/Container'

import { loadSelectedBook } from '../../utils/helper-functions/loadSelectedBook'
import { getRandomBooks } from '../../utils/helper-functions/getRandomBooks'

import { ReactComponent as BackIcon } from '../../assets/svg/Back_Icon.svg'

import { useStyles } from './styles'

/**
 * =====Main Page Component=====
 * Renders a specific book with its expanded information.
 *
 *    subcomponents:
 *
 *      Ratings: renders the books's rating.
 *
 *      BookDetails: renders book's details.
 *
 *      BookSummary: renders book's summary.
 *
 *      OtherRandomBooks: renders up to 5 books randomly selected based on the collection
 *      in redux store.
 *
 *    props:
 *
 *      book: the specific book from redux store gotten with a helper function that filters
 *      out the book by its id (which is dynamically generated in the redux action in the fetching
 *      stage).
 *
 *      history: received from react router so it can send category name as a route parameter value.
 *
 *      selectedCategory: category name is stored in redux so we can keep a track of it between route changes.
 *
 *      randomBooks: randomly selected books from redux store gotten with a helper function.
 */
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
  selectedCategory,
  randomBooks,
  history
}) => {
  window.scroll(0, 0)

  const classes = useStyles()

  const handleClick = () => history.push(`/${selectedCategory}`)

  if (Object.keys(book).length === 0) {
    return (
      <div className={classes.notFound}>
        <Container>
          <div onClick={handleClick} className={classes.backLinkContainer}>
            <BackIcon className={classes.backIcon} />
            <Typography variant='body1' className={classes.backLinkText}>
              Back to collection
            </Typography>
          </div>
          <h1>Sorry! Book Not Found</h1>
        </Container>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Container>
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
          <OtherRandomBooks randomBooks={randomBooks} />
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collection } = state.book
  const { bookId } = ownProps.match.params
  return {
    selectedCategory: state.category.selectedCategory,
    book: loadSelectedBook(collection, bookId),
    randomBooks: getRandomBooks(collection)
  }
}

export default connect(mapStateToProps)(BookPage)
