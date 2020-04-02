import React from 'react'
import { connect } from 'react-redux'

// Components
import SearchInput from './SearchInput'
import CategoryTags from './CategoryTags'
import CategoryListContainer from './CategoryListContainer'
import { CustomDivider } from '../common/CustomDivider'

import { useStyles } from './styles'

import {
  groupByYear,
  groupByWriter,
  groupByArtist,
  groupByOwner
} from '../../utils/helper-functions/groupBy'

const BooksCollection = ({ booksCollectionGroup, match }) => {
  const classes = useStyles()

  // const category = match.params.category
  // console.log(category)

  if (booksCollectionGroup) {
    const groupedCollection = groupByYear(booksCollectionGroup)
    const groupKeys = Object.keys(groupedCollection).sort((a, b) => b - a)
    // const groupKeys = Object.keys(groupedCollection).sort()

    return (
      <div className={classes.root}>
        <SearchInput />
        <CategoryTags />
        {groupKeys.map((key, index) => {
          while (index < groupKeys.length - 1) {
            return (
              <div key={`${key.trim()}`}>
                <CategoryListContainer
                  key={`${key.trim()}`}
                  groupKey={key}
                  books={groupedCollection[key]}
                />
                <CustomDivider />
              </div>
            )
          }
          return (
            <div key={`${key.trim()}`}>
              <CategoryListContainer
                groupKey={key}
                books={groupedCollection[key]}
              />
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <SearchInput />
        <CategoryTags />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  booksCollectionGroup: state.book.collection
})

export default connect(mapStateToProps)(BooksCollection)
