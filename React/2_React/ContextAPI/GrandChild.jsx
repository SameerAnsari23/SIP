 import React from 'react'
import { useContext } from 'react'
import { blesContext, moneyContext } from '../src/App'

const GrandChild = () => {
  let money = useContext(moneyContext)
  let blessing = useContext(blesContext)
  return (
    <div>
        Ohh... Mere dadu ne mujhe <strong>{money}</strong> aur <strong>{blessing}</strong> bhi di hai... Maza aa gaya.. ab toh party hogi
    </div>
  )
}

export default GrandChild
