import React, { useState } from 'react'

const TodoInput = (props) => {
    let addTodos = props.addTodos;
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");

    function todosHandler() {
        addTodos(task, desc);
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
        </div>
    )
}

export default TodoInput
