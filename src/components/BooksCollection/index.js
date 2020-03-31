import React from 'react'

// Material UI
import TextField from '@material-ui/core/TextField'

// Components
import CategoryTag from '../CategoryTag'

import { CATEGORY_NAMES } from '../../utils/constants'

import { useStyles } from './styles'

const BooksCollection = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField
        variant='outlined'
        fullWidth
        InputProps={{ classes: { input: classes.input } }}
      />
      <div className={classes.categoryTagsContainer}>
        <CategoryTag name={CATEGORY_NAMES.Year} />
        <CategoryTag name={CATEGORY_NAMES.Writer} />
        <CategoryTag name={CATEGORY_NAMES.Artist} />
        <CategoryTag name={CATEGORY_NAMES.Owner} />
        <CategoryTag name={CATEGORY_NAMES.Random} />
      </div>
    </div>
  )
}

export default BooksCollection
