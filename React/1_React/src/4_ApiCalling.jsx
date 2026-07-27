import React, { useEffect, useState } from 'react'

const App = () => {
    console.log("App")
    const [todos, setTodos] = useState([])

    // useEffect(fn, []) 
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/todos";
        async function call() {
            try {
                let data = await fetch(url);
                console.log("Hello", data)
                data = await data.json();
                console.log(data);
                setTodos(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        call();
    }, [])
    return (
        <div>
            <button>inc</button>
            {todos.map((t) => {
                return <li key={t.id}>{t.title} - {t.completed ? <span>Completed</span> : <span>Not completed</span>}</li>
            })}
        </div>
    )
}

export default App
