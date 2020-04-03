import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import SearchInput from './SearchInput'
import CategoryTagsContainer from './CategoryTagsContainer'
import BooksByCategoryDirectory from './BooksByCategoryDirectory'
import { CustomDivider } from '../common/CustomDivider'

import { useStyles } from './styles'

import { groupBy } from '../../utils/helper-functions/groupBy'

const BooksDirectoryPage = ({ collection, match }) => {
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
        <SearchInput />
        <CategoryTagsContainer />
      </div>
    )
  } else {
    const groupKeys = Object.keys(groupedCollection).sort((a, b) => b - a)

    return (
      <div className={classes.root}>
        <SearchInput />
        <CategoryTagsContainer />
        {groupKeys.map(key => (
          <div key={`${key.trim()}`}>
            <BooksByCategoryDirectory
              key={`${key.trim()}`}
              groupKey={key}
              books={groupedCollection[key]}
            />
            <CustomDivider />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  collection: state.book.collection
})

export default connect(mapStateToProps)(BooksDirectoryPage)
