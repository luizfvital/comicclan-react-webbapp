import { SearchInputActionTypes } from './searchInputActionTypes'

export const storeSearchInputTerm = inputTerm => ({
  type: SearchInputActionTypes.STORE_SEARCH_INPUT_TERM,
  payload: inputTerm
})
