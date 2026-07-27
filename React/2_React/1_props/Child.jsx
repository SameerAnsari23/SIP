import React from 'react'
import GrandChild from './GrandChild';

const Child = (props) => {
    let money = props.money;
  return (
    <div>
        Inka grand child 2000 rupess ka kya karega.... main 1500 rakh leta hu... wo toh chota hai bahut ooske liye yeh 500 bhi bahut bada amt hai.
        <strong> Tere grandfather ne tujhe {money-1500}</strong>
        <GrandChild money={money-1500}/>
    </div>
  )
}

export default Child
