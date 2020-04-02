import React from 'react'
import { connect } from 'react-redux'

// Components
import SearchInput from './SearchInput'
import CategoryTagsContainer from './CategoryTagsContainer'
import BooksByCategoryDirectory from './BooksByCategoryDirectory'
import { CustomDivider } from '../common/CustomDivider'

import { useStyles } from './styles'

import {
  groupByYear,
  groupByWriter,
  groupByArtist,
  groupByOwner
} from '../../utils/helper-functions/groupBy'

const BooksDirectoryPage = ({ collection, match }) => {
  const classes = useStyles()

  let groupedCollection
  let groupKeys
  let toRender

  if (collection) {
    groupedCollection = groupByYear(collection)
    groupKeys = Object.keys(groupedCollection).sort((a, b) => b - a)
    // const groupKeys = Object.keys(groupedCollection).sort()
    const listContainers = groupKeys.map((key, index) => {
      while (index < groupKeys.length - 1) {
        return (
          <div key={`${key.trim()}`}>
            <BooksByCategoryDirectory
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
          <BooksByCategoryDirectory
            groupKey={key}
            books={groupedCollection[key]}
          />
        </div>
      )
    })
    toRender = () => (
      <div className={classes.root}>
        <SearchInput />
        <CategoryTagsContainer />
        {listContainers}
      </div>
    )
  } else {
    toRender = () => (
      <div className={classes.root}>
        <SearchInput />
        <CategoryTagsContainer />
      </div>
    )
  }

  return toRender()
}

const mapStateToProps = state => ({
  collection: state.book.collection
})

export default connect(mapStateToProps)(BooksDirectoryPage)
