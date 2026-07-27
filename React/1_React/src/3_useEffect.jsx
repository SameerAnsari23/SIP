import React, { useEffect, useState } from 'react'

const App = () => {
    const [cnt, setCnt] = useState(0);
    console.log("App")

    // useEffect(fn, []) 

    // Mount(jab paheli baar call jaati hai) --> update(jab koi changes aata hai) --> unMount(api calling ko rokna)
    // useEffect(() => {
    //     console.log("main update hua")
    // },
    //     []  // Dependancy array
    // )


    useEffect(() => {
        console.log("main update hua")
    },
        [cnt]  // Dependancy array
    )
    return (
        <div>
            {cnt}
            <button onClick={() => { setCnt(cnt + 1) }}>inc</button>
        </div>
    )
}

export default App
