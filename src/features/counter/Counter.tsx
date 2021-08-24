import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { increment, decrement, incrementBy, decrementBy, countDown } from './counterSlice'
import './Counter.css'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <p>count is: {count}</p>
      <p className="Buttons">
        <button onClick={() => dispatch(decrementBy(10))}>--</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementBy(10))}>++</button>
        <button onClick={() => dispatch(countDown())}>Count Down</button>
      </p>
    </>
  )
}

export default App
