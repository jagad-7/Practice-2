import React, { useRef } from 'react'

export default function UseRef2() {
   let headings =  useRef([])
 
  return (
    <div>
        <h1 ref={(el)=>headings.current[0] = el} onClick={()=>{
            console.log(headings)
        }}>This is heading 1</h1>
        <h2 ref={(el)=>headings.current[1] = el}>This is heading 2</h2>
        <h3 ref={(el)=>headings.current[2] = el}>This is heading 3</h3>
        <h4 ref={(el)=>headings.current[3] = el}>This is heading 4</h4>
        <h5 ref={(el)=>headings.current[4] = el}>This is heading 5</h5>
    </div>
  )
}
