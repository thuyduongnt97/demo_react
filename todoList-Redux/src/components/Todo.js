import React, { memo, useState} from 'react'
import {connect, useDispatch} from 'react-redux';
import {
    // getEditTodo,
    onEditTodo
} from './../store/actions'
const Todo = memo(props => { 
    const {todo, onEditTodo, markComplete, removeTodo, index} = props

    const [text, setText] = useState(todo.text)
    const [editing, setEditing] = useState(false)
    const editTodo = () => {
        onEditTodo(todo.id, text)
    }
    const checkEditing = () => {
        setEditing(true)
    }
    return (
       
        <li className = {`${editing ? 'editing' : ''} ${todo.isCompleted ? 'completed' : ''}`}>
            { !editing ? 
                <div className="view">
                    <input className="toggle" type="checkbox" checked = {todo.isCompleted} onChange = {() => markComplete(todo.id)} />
                    <label onDoubleClick = {checkEditing}> {todo.text}</label>
                    <button className="destroy" onClick = {() => removeTodo(todo.id)} > </button>
                </div> :
                <input className="edit" type ='text' 
                    value = {text} 
                    onChange = {e => setText(e.target.value)}
                    autoFocus 
                    onBlur = {editTodo}
                    onKeyPress = {e => {
                        if(e.key === 'Enter'){
                            editTodo()
                        }
                    }}
                />
            }
        </li> 
          
        
    )
})

const mapDispatchToProps = disPatch => ({
    onEditTodo: (id, te) => disPatch(onEditTodo)
})

export default connect(null, mapDispatchToProps) (Todo)
// export default Todo