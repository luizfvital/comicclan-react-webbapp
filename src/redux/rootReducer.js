import { combineReducers } from 'redux'

import bookReducer from './book/bookReducer'
import searchInputReducer from './searchInput/searchInputReducer'
import categoryReducer from './category/categoryReducer'

const rootReducer = combineReducers({
  book: bookReducer,
  searchInput: searchInputReducer,
  category: categoryReducer
})

export default rootReducer
