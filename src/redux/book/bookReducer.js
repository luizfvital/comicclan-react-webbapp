import { BookActionTypes } from './bookActionTypes'

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: undefined
}

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS_START:
      return {
        ...state,
        isFetching: true
      }
    case BookActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        collection: action.payload,
        isFetching: false
      }
    case BookActionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default bookReducer
