import React, { memo } from 'react'

const TodoList = memo(props => {
    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
               
               
            />
            <label htmlFor="toggle-all"  ></label>
            <ul className="todo-list">
               
            </ul>

        </section>
    )
})

export default TodoList