import React, { useRef, useState } from "react";
import "./UseRef.css";
export default function UseRef() {
  let ele = useRef(null);
  let x = useRef(10);
  const [y, setY] = useState(1)

  return (
    <div>
      <h1 ref={ele} className="active">
        This is useRef Hook Concept
      </h1>
      <button
        onClick={() => {
          console.log(ele);
          console.dir(ele.current);
          ele.current.classList.toggle("active");
          ele.current.classList.toggle("inactive");
        }}
      >
        Click
      </button>

      <h2>X Value : {x.current}</h2>
      <button
        onClick={() => {
          x.current = x.current + 10;
          console.log(x.current);
          setY(y + 1)
        }}
      >
        Increment
      </button>
    </div>
  );
}
