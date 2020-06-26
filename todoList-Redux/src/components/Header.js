import React, { memo, useState} from 'react'
import {connect} from 'react-redux';
import {addTodo} from './../store/actions'



const Header = memo ((props) => {
    const [text, setText] =  useState('')
    const {addTodo} = props
    const onAddTodo = (e = {}) =>{
        if (e.key === 'Enter' && text)
        {
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }
    
    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                value = {text}
                placeholder="What needs to be done?"
                onChange = {(e) => setText(e.target.value)}
                onKeyPress = {(e) => onAddTodo(e)}
            />
        </header>
    )
})

const mapDispatchToProps = {
    addTodo
}

export default connect(null,mapDispatchToProps)(Header);