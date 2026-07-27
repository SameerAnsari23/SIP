import React, { useState } from 'react'
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const App = () => {
    // const [todos, setTodos] = useState([]);

    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    
    function addTodos(task, desc) {
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
    }


    return (
        <div>
            <TodoInput addTodos={addTodos}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default App
