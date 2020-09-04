import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Counter } from '../types/Counter'

export const Home = () => {
  const value: Counter = useSelector((state: any) => state.counterReducer)
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch({ type: 'INCREMENT', payload: 12 })
  }
  return (
    <div>
      <h1>{value.value}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Home
