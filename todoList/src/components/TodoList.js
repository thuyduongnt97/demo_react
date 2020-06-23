import React, { memo } from 'react'
import Todo from './Todo';
const TodoList = memo(props => {
    const {listTodos, getEditTodo, todoEditingId, onEditTodo, markComplete,isCheckedAll, checkAllTodos, removeTodo} = props;
    return (
        <section className="main">
            <input className="toggle-all" type = "checkbox" checked = {isCheckedAll} onChange ={() => {}}  />
            <label htmlFor="toggle-all"  onClick = {checkAllTodos}></label>
            <ul className="todo-list">
            {
                listTodos.map((todo, index) => 
                <Todo 
                    {...{todo}}
                    key = {`todo${todo.id}`} 
                    index = {index} 
                    getEditTodo = {getEditTodo}
                    todoEditingId = {todoEditingId}
                    onEditTodo = {onEditTodo}
                    markComplete={markComplete}
                    removeTodo= {removeTodo}
                />)
            }
            </ul>

        </section>
    )
})

export default TodoList