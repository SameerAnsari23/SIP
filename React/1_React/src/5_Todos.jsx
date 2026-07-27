import React, { useState } from 'react'

const App = () => {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
    // const [todos, setTodos] = useState([]);

    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    
    function todosHandler() {
        console.log(task, desc);
        // setTodos([...todos, {task, desc, id: new Date().getTime()}]);

        // setTodos((prevTodos) => {
        //     return [...prevTodos, { task, desc, id: new Date().getTime() }]
        // })

        setTodos((prevTodos) => {
            localStorage.setItem(
                "todos",
                JSON.stringify([
                    ...prevTodos,
                    { task, desc, id: new Date().getTime() },
                ])
            );
            return [...prevTodos, { task, desc, id: new Date().getTime() }];
        });


        setTask("");
        setDesc("");
    }


    return (
        <div>
            <input
                onChange={(e) => setTask(e.target.value)}
                type='text'
                placeholder='Enter your task'
                value={task}
            />
            <input
                onChange={(e) => setDesc(e.target.value)}
                type='text'
                placeholder='Enter your task'
                value={desc}
            />
            <button onClick={todosHandler}>Add Task</button>

            <ul className='taskList'>
                {todos.map((t) => {
                    return <li key={t.id}>{t.task} - {t.desc}</li>
                })}
            </ul>
        </div>
    )
}

export default App
