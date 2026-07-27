import React from 'react'
import Child from './Child'

const Parent = (props) => {
    let money = props.money
  return (
    <div>
      Inka grand child 5000 rupess ka kya karega.... main 3000 rakh leta hu... wo toh chota hai bahut ooske liye yeh 2000 bhi bahut bada amt hai.

      <strong> Oske grandfather ne oosko {money-3000} diye hai </strong>
      <Child money={money-3000}/>
    </div>
  )
}

export default Parent
