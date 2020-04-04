import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import SearchInput from './SearchInput'
import CategoryTagsContainer from './CategoryTagsContainer'
import BooksByCategory from './BooksByCategory'
import BooksRandom from './BooksRandom'
import { Container } from '../common/Container'
import { AlertMessage } from '../common/AlertMessage'

import { useStyles } from './styles'

import { groupBy } from '../../utils/helper-functions/groupBy'

/**
 * =====Main Page Component=====
 * Renders the homepage with its content divided into subcomponents.
 *
 *    subcomponents:
 *
 *      SearchInput: renders an input field, and it's in charge of making the
 *      api call and update the redux store.
 *
 *      CategoryTagsContainer: renders a container with grouping option tags/buttons.
 *
 *      BooksByCategory: renders a section of books grouped by category.
 *      It handles 4 category options: Year(default), Writer, Artist, and Owner.
 *
 *      BooksRandom: renders a section of books when category 'Random' is selected.
 *
 *    props:
 *
 *      match: received from react router with 'category' as a route parameter.
 *      collection: a collection of books received from redux store.
 *      isFetching: status of the api call, received from redux store.
 *      errorMessage: received from redux store in the case of an api call error.
 */
const BooksDirectoryPage = ({
  isFetching,
  errorMessage,
  collection,
  match
}) => {
  const classes = useStyles()

  const { category } = match.params
  const [selectedCategory, setSelectedCategory] = useState('year')
  const [groupedCollection, setGroupedCollection] = useState({})
  const [alertOpen, setAlertOpen] = useState(false)

  /**
   * Sets the category to be used for grouping the results from search.
   * When the app first loads the route parameter 'category' will be undefined,
   * so it sets it to 'year' by default, otherwise, it will be set with the value
   * received by the route.
   */
  useEffect(() => {
    const setCategoryToGroupBy = () => {
      if (category === undefined) {
        setSelectedCategory('year')
      } else {
        setSelectedCategory(category)
      }
    }
    setCategoryToGroupBy()
  }, [category])

  /**
   *Gets the books collection received as props, calls a helper function that 
   returns a new object with key properties based on the grouping criteria (selectedCategory), 
   and stores this new collection in local state.
   */
  useEffect(() => {
    if (collection) {
      const groupByCategory = () => {
        setGroupedCollection(groupBy(selectedCategory)(collection))
      }
      groupByCategory()
    }
  }, [collection, selectedCategory])

  /**
   * Handles the alert message state in case of a network error.
   */
  useEffect(() => {
    const setAlertState = () => {
      if (errorMessage) {
        setAlertOpen(true)
        setTimeout(() => setAlertOpen(false), 6000)
      }
    }
    setAlertState()
  }, [errorMessage])

  if (!groupedCollection) {
    return (
      <div className={classes.root}>
        <Container>
          <SearchInput />
          <CategoryTagsContainer />
        </Container>
      </div>
    )
  } else {
    const groupKeys = Object.keys(groupedCollection).sort((a, b) => b - a)

    return (
      <div className={classes.root}>
        <Container>
          <SearchInput />
          <CategoryTagsContainer />
          {category === 'random' ? (
            <BooksRandom collection={collection} />
          ) : (
            groupKeys.map(key => (
              <BooksByCategory
                key={`${key.trim()}`}
                groupKey={key}
                books={groupedCollection[key]}
              />
            ))
          )}
          <Backdrop
            className={classes.backdrop}
            open={isFetching ? true : false}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
          <AlertMessage open={alertOpen} message={errorMessage || ''} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  collection: state.book.collection,
  isFetching: state.book.isFetching,
  errorMessage: state.book.errorMessage
})

export default connect(mapStateToProps)(BooksDirectoryPage)
