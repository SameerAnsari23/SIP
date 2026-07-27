import React from 'react'
import Parent from '../1_props/Parent'

const App = () => {
  let money = 5000;
  return (
    <div>
      I want to give 5000 rupees to my Grand Child.
      <Parent money={money}/>
    </div>
  )
}

export default App
