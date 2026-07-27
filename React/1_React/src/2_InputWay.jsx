import { useRef, useState } from "react"
import React from 'react'

const App = () => {
  // const inpRef = useRef();

  const [inp, setInp] = useState("");

  function nameHandler() {
    // in js we was doing like this
    // let inp = document.getElementById('inp')
    // console.log(inp.value)

    // 1st method in react using useRef (Input Way)
    // console.log(inpRef.current.value)

    // 2nd method in react using useState (input way)
    console.log(inp);
  }
  return (
    <div>Hello
      {/* <input ref={inpRef} type='text' id='inp' placeholder='Enter your name'/> */}

      <input onChange={(e) => {
        // console.log(e.target.value)
        setInp(e.target.value)
        }} 
        type='text' placeholder='Enter your name'/>
      <button onClick={nameHandler}>submit</button>
    </div>
  )
}

export default App
