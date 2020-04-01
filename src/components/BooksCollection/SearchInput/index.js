import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { connect } from 'react-redux'

// Material UI
import TextField from '@material-ui/core/TextField'

// Images
import searchIcon from '../../../assets/png/Search_Icon@2x.png'

import { fetchBooksStartAsync } from '../../../redux/book/bookActions'

import { useStyles } from './styles'

const SearchInput = ({ fetchBooks }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = evt => {
    setSearchInput(evt.target.value)
    fetchBooks()
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={searchIcon} alt='Search Icon' className={classes.image} />
      <DebounceInput
        element={TextField}
        debounceTimeout={400}
        onChange={handleChange}
        variant='outlined'
        fullWidth
        placeholder='Search by book name'
        InputProps={{
          classes: { input: classes.input }
        }}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooksStartAsync())
})

export default connect(null, mapDispatchToProps)(SearchInput)
