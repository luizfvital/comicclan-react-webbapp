import { CategoryActionTypes } from './categoryActionTypes'

export const storeSelectedCategory = selectedCategory => ({
  type: CategoryActionTypes.STORE_SELECTED_CATEGORY,
  payload: selectedCategory
})
