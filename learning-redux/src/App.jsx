import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,multiply, incrementByAmount } from './redux/counter/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is : {count}
        <button onClick={() => dispatch(incrementByAmount(5))}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
