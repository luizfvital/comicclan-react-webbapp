import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CategoryTag from './CategoryTag'

import { CATEGORY_NAMES } from '../../../utils/constants/constants'

import { storeSelectedCategory } from '../../../redux/category/categoryActions'

import { useStyles } from './styles'

/**
 * Renders the tags/buttons for chosing the grouping category.
 *
 *    props:
 *
 *      history: received from react router so it can send category name as a
 *      route parameter value.
 *
 *      selectedCategory: category name is stored in redux so we can keep a track of it between route changes.
 *
 *      storeSelectedCategory: action to store the category name into redux store.
 */
const CategoryTagsContainer = ({
  history,
  selectedCategory,
  storeSelectedCategory
}) => {
  const classes = useStyles()

  const [isActive, setIsActive] = useState({})

  useEffect(() => {
    const updateIsActiveState = () => {
      let newIsActive = {
        year: '',
        writer: '',
        artist: '',
        owner: '',
        random: ''
      }
      for (let category in newIsActive) {
        category === selectedCategory
          ? (newIsActive[category] = true)
          : (newIsActive[category] = false)
      }

      setIsActive(newIsActive)
    }
    updateIsActiveState()
  }, [selectedCategory])

  const handleClick = name => {
    storeSelectedCategory(name)
    history.push(`/${name}`)
  }

  return (
    <div className={classes.root}>
      <CategoryTag
        handleClick={handleClick}
        isActive={isActive.year}
        name={CATEGORY_NAMES.Year}
      />
      <CategoryTag
        handleClick={handleClick}
        isActive={isActive.writer}
        name={CATEGORY_NAMES.Writer}
      />
      <CategoryTag
        handleClick={handleClick}
        isActive={isActive.artist}
        name={CATEGORY_NAMES.Artist}
      />
      <CategoryTag
        handleClick={handleClick}
        isActive={isActive.owner}
        name={CATEGORY_NAMES.Owner}
      />
      <CategoryTag
        handleClick={handleClick}
        isActive={isActive.random}
        name={CATEGORY_NAMES.Random}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  selectedCategory: state.category.selectedCategory
})

const mapDispatchToProps = dispatch => ({
  storeSelectedCategory: selected => dispatch(storeSelectedCategory(selected))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoryTagsContainer)
)
