import React from 'react'

import { useStyles } from './styles'

const ActiveTag = ({ classes, name, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(name.toLowerCase())}
      className={classes.activeTag}
    >
      <span>{name}</span>
    </div>
  )
}

const Tag = ({ classes, name, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(name.toLowerCase())}
      className={classes.tag}
    >
      <span>{name}</span>
    </div>
  )
}

const CategoryTag = ({ name, isActive, handleClick }) => {
  const classes = useStyles()

  if (isActive) {
    return <ActiveTag classes={classes} name={name} handleClick={handleClick} />
  } else {
    return <Tag classes={classes} name={name} handleClick={handleClick} />
  }
}

export default CategoryTag
