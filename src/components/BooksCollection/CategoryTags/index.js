import React, { useState } from 'react'

// Components
import CategoryTag from './CategoryTag'

import { CATEGORY_NAMES } from '../../../utils/constants'

import { useStyles } from './styles'

const CategoryTags = () => {
  const classes = useStyles()

  const [isActive, setIsActive] = useState({
    year: true,
    writer: false,
    artist: false,
    owner: false,
    random: false
  })

  const handleClick = name => {
    let newIsActive = {
      year: '',
      writer: '',
      artist: '',
      owner: '',
      random: ''
    }
    for (let category in newIsActive) {
      category === name
        ? (newIsActive[category] = true)
        : (newIsActive[category] = false)
    }
    setIsActive(newIsActive)
  }

  return (
    <div className={classes.categoryTagsContainer}>
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

export default CategoryTags
