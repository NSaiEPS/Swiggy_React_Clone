import { combineReducers } from 'redux'

import actionReducer from './ActionCreater'
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `actionReducer`
  info: actionReducer,
//   filters: filtersReducer,
})

export default rootReducer
