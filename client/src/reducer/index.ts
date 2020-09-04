import counterReducer from './counter'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  counterReducer,
})

export default reducer
