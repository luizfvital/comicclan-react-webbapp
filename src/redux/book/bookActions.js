import { BookActionTypes } from './bookActionTypes'
import { api } from '../../APIs/api'

export const fetchBooksStart = () => ({
  type: BookActionTypes.FETCH_BOOKS_START
})

export const fetchBooksSuccess = booksCollection => ({
  type: BookActionTypes.FETCH_BOOKS_SUCCESS,
  payload: booksCollection.data
})

export const fetchBooksError = error => ({
  type: BookActionTypes.FETCH_BOOKS_ERROR,
  payload: error
})

export const fetchBooksStartAsync = () => dispatch => {
  dispatch(fetchBooksStart())
  api
    .get()
    .then(result => {
      dispatch(fetchBooksSuccess(result))
    })
    .catch(error => dispatch(fetchBooksError(error.message)))
}
