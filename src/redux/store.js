import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleWares = [thunk]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
)

export default store
