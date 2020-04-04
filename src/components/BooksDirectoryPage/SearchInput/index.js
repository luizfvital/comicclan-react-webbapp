import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'

import searchIcon from '../../../assets/png/Search_Icon@2x.png'

import { fetchBooksStartAsync } from '../../../redux/book/bookActions'
import { storeSearchInputTerm } from '../../../redux/searchInput/searchInputActions'

import { useStyles } from './styles'

/**
 * Renders an input of type text for searching books.
 * It uses a react component that renders an Input with debounced onChange.
 * (https://www.npmjs.com/package/react-debounce-input)
 *
 *    props:
 *
 *      inputValue: received from redux store.
 *      The input value is stored in redux so we can keep a track of it between route changes.
 *
 *      storeSearchInputTerm: action to store the input value into redux store.
 *
 *      fetchBooks: action received from redux for the api call.
 */
const SearchInput = ({ fetchBooks, storeSearchInputTerm, inputValue }) => {
  const handleChange = evt => {
    fetchBooks(evt.target.value)
    storeSearchInputTerm(evt.target.value)
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={searchIcon} alt='Search Icon' className={classes.image} />
      <DebounceInput
        element={TextField}
        debounceTimeout={300}
        value={inputValue}
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

const mapStateToProps = state => ({
  inputValue: state.searchInput.inputTerm
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: searchInput => dispatch(fetchBooksStartAsync(searchInput)),
  storeSearchInputTerm: searchInput =>
    dispatch(storeSearchInputTerm(searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
