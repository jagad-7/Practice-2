import React, { useState } from 'react'
import UseCostHook from './UseCostHook'

export default function CustHook() {
    const [count, setCount] = useState(0)

   UseCostHook(count)
  return(
    <div>
        <button onClick={()=>setCount(count + 1)}>Count -- {count}</button>
    </div>
  )
}
