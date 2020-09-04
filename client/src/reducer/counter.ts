import { Counter } from '../types/Counter'
import { Action } from '../types/Action'

let defaultValue: Counter = {
  value: 10,
}

const counterReducer = (state: Counter = defaultValue, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: action.payload }
    case 'DECREMENT':
      return 30
    default:
      return state
  }
}

export default counterReducer
