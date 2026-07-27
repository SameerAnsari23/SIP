import React from 'react'
import Parent from '../ContextAPI/Parent'
import { createContext } from 'react';
const moneyContext = createContext();
const blesContext = createContext();
const App = () => {
  let money = 5000;
  let bless = "blessing"
  return (
    <div>
      I want to give 5000 rupees to my Grand Child and also some .
      <moneyContext.Provider value={money}>
        <blesContext.Provider value={bless}>
          <Parent/>
        </blesContext.Provider>
      </moneyContext.Provider>
    </div>
  )
}

export default App;
export {moneyContext, blesContext};
