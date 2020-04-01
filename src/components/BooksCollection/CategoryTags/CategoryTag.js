import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  activeTag: {
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    display: 'inline-block',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '6px 14px 8px',
    marginRight: '10px',
    borderRadius: '19px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      padding: '4px 12px 6px',
      margin: '0 2px'
    }
  },
  tag: {
    cursor: 'pointer',
    display: 'inline-block',
    color: '#777777',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '6px 14px 8px',
    marginRight: '10px',
    borderRadius: '19px',
    '&:hover': {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      padding: '4px 12px 6px',
      margin: '0 2px'
    }
  }
}))

const ActiveTag = ({ classes, name, handleClick }) => (
  <div
    onClick={() => handleClick(name.toLowerCase())}
    className={classes.activeTag}
  >
    <span>{name}</span>
  </div>
)

const Tag = ({ classes, name, handleClick }) => (
  <div onClick={() => handleClick(name.toLowerCase())} className={classes.tag}>
    <span>{name}</span>
  </div>
)

const CategoryTag = ({ name, isActive, handleClick }) => {
  const classes = useStyles()

  if (isActive) {
    return <ActiveTag classes={classes} name={name} handleClick={handleClick} />
  } else {
    return <Tag classes={classes} name={name} handleClick={handleClick} />
  }
}

export default CategoryTag
