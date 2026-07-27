import React from 'react'

const TodoList = (props) => {
    let todos = props.todos
    return (
        <div>
            <ul>
                {todos.map((t) => {
                    return <li key={t.id}>{t.task} - {t.desc}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoList
