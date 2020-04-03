import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import SearchInput from './SearchInput'
import CategoryTagsContainer from './CategoryTagsContainer'
import BooksByCategoryDirectory from './BooksByCategoryDirectory'
import { Container } from '../common/Container'

import { useStyles } from './styles'

import { groupBy } from '../../utils/helper-functions/groupBy'

const BooksDirectoryPage = ({ isFetching, collection, match }) => {
  const classes = useStyles()

  const { category } = match.params
  const [groupedCollection, setGroupedCollection] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('year')

  useEffect(() => {
    if (collection) {
      const groupByCategory = () => {
        setGroupedCollection(groupBy(selectedCategory)(collection))
      }
      groupByCategory()
    }
  }, [collection, selectedCategory])

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
          {groupKeys.map(key => (
            <BooksByCategoryDirectory
              key={`${key.trim()}`}
              groupKey={key}
              books={groupedCollection[key]}
            />
          ))}
          <Backdrop
            className={classes.backdrop}
            open={isFetching ? true : false}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  collection: state.book.collection,
  isFetching: state.book.isFetching
})

export default connect(mapStateToProps)(BooksDirectoryPage)
