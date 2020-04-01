import React from 'react'

// Material UI
import TextField from '@material-ui/core/TextField'

// Components
import CategoryTags from './CategoryTags'

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
      <CategoryTags />
    </div>
  )
}

export default BooksCollection
