import { SearchInputActionTypes } from './searchInputActionTypes'

const INITIAL_STATE = {
  inputTerm: ''
}

const searchInputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchInputActionTypes.STORE_SEARCH_INPUT_TERM:
      return {
        ...state,
        inputTerm: action.payload
      }

    default:
      return state
  }
}

export default searchInputReducer
