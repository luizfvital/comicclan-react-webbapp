import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  tag: {
    backgroundColor: theme.palette.primary.main,
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
  }
}))

const CategoryTag = ({ name }) => {
  const classes = useStyles()
  return (
    <div className={classes.tag}>
      <span>{name}</span>
    </div>
  )
}

export default CategoryTag
