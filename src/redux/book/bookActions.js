import { BookActionTypes } from './bookActionTypes'
import { api } from '../../APIs/api'

export const fetchBooksStart = () => ({
  type: BookActionTypes.FETCH_BOOKS_START
})

export const fetchBooksSuccess = booksCollection => ({
  type: BookActionTypes.FETCH_BOOKS_SUCCESS,
  payload: booksCollection
})

export const fetchBooksError = error => ({
  type: BookActionTypes.FETCH_BOOKS_ERROR,
  payload: error
})

export const fetchBooksStartAsync = searchInput => async dispatch => {
  dispatch(fetchBooksStart())
  try {
    const response = await api(searchInput).get()
    const booksCollectionWithId = response.data.map(book => ({
      ...book,
      id: `${book.year}${book.name.split('#')[1]}`
    }))
    dispatch(fetchBooksSuccess(booksCollectionWithId))
  } catch (error) {
    return dispatch(fetchBooksError(error.message))
  }
}
