import React from 'react'
import UseCustHook2 from './UseCustHook2'

export default function CustHook4() {

    const [count, increment, decrement, reset] = UseCustHook2()
    
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
