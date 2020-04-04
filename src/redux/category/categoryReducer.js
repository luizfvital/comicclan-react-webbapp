import { CategoryActionTypes } from './categoryActionTypes'

const INITIAL_STATE = {
  selectedCategory: 'year'
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.STORE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }

    default:
      return state
  }
}

export default categoryReducer
