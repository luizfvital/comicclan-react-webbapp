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

const BooksCollection = props => {
  const classes = useStyles()

  // console.log(props.match.params.category)
  console.log(props.booksCollection)
  if (props.booksCollection) {
    console.log(groupByYear(props.booksCollection))
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={classes.root}>
      <SearchInput />
      <CategoryTags />
      {numbers.map((number, index) => {
        while (index < numbers.length - 1) {
          return (
            <React.Fragment key={index}>
              <CategoryListContainer />
              <CustomDivider />
            </React.Fragment>
          )
        }
        return (
          <React.Fragment key={index}>
            <CategoryListContainer />
          </React.Fragment>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  booksCollection: state.book.collection
})

export default connect(mapStateToProps)(BooksCollection)
