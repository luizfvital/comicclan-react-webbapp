import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'

import searchIcon from '../../../assets/png/Search_Icon@2x.png'

import { fetchBooksStartAsync } from '../../../redux/book/bookActions'

import { useStyles } from './styles'

const SearchInput = ({ fetchBooks }) => {
  const handleChange = evt => {
    fetchBooks(evt.target.value)
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={searchIcon} alt='Search Icon' className={classes.image} />
      <DebounceInput
        element={TextField}
        debounceTimeout={300}
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
  fetchBooks: searchInput => dispatch(fetchBooksStartAsync(searchInput))
})

export default connect(null, mapDispatchToProps)(SearchInput)
