import React, { PureComponent } from 'react';
import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'

import './css/Todo.css'
 const fillterByStatus = (todos = [], status = '', id) => {
        switch (status) {
            case 'ACTIVE':
                return todos.filter(todo => !todo.isCompleted)
            case 'COMPLETE':
                return todos.filter(todo => todo.isCompleted)
            case 'REMOVE':
                return todos.filter(todo => todo.id !== id)
            default:
                return todos;
        }
    }
class App extends PureComponent {
    state = {
        listTodos: [{
            id: 1,
            text: 'todo1',
            isCompleted: true
        },{
            id: 2,
            text: 'todo2',
            isCompleted: false
        },{
            id: 3,
            text: 'todo3',
            isCompleted: true
        }],
        todoEditingId: '',
        isCheckedAll : false,
        status: "ALL"
    }
    
    isNotCheckAll = (todos = []) => todos.find(todo=> !todo.isCompleted)
    
    componentWillMount(){
        this.setState({isCheckedAll : !this.isNotCheckAll(this.state.listTodos)})
    }
    addTodos = (todo = {}) => {
        this.setState(preState => ({
          listTodos: [...preState.listTodos, todo]
        }))
    }

    getEditTodo = (id = '') => {
        this.setState({
          todoEditingId: id
        }
       )
    }
    onEditTodo = (todo = {}, index = -1)=> {
        if(index >= 0){
            const {listTodos : list } = this.state
            list.splice(index,1,todo)
            this.setState({listTodos : list, todoEditingId : ''})
        }
    }
    onChangeComplete = (id = '' ) =>{
        const {listTodos} = this.state
        const listUpdate = listTodos.map(todo => todo.id === id? ({...todo, isCompleted : !todo.isCompleted}) : todo)
        this.setState(preState => ({
            listTodos : listUpdate,
            isCheckedAll : !this.isNotCheckAll(listUpdate)
        }))
    }
    checkAllTodos = () => {
        const {listTodos, isCheckedAll} = this.state
        this.setState(preState => ({
            listTodos: listTodos.map(todo => ({...todo, isCompleted : !isCheckedAll})),
            isCheckedAll: !preState.isCheckedAll
        }))
    }

    setStatusFilter = (status = '') => {
        this.setState({
            status : status
        })
    }

    clearCompleted = () =>{
        const {listTodos} = this.state
        this.setState({
            listTodos : fillterByStatus(listTodos, 'ACTIVE')
        })
    }
    removeTodo = (id = '') =>{
        const {listTodos} = this.state
        this.setState({
            listTodos : fillterByStatus(listTodos, 'REMOVE', id)
        })
    }
    render() {
        const { listTodos, todoEditingId, isCheckedAll, status} = this.state
        return (
        <div className="todoapp">
            <Header addTodo = {this.addTodos} />
            <TodoList 
                listTodos = {fillterByStatus(listTodos, status)}
                getEditTodo = {this.getEditTodo}
                todoEditingId = {todoEditingId}
                onEditTodo = {this.onEditTodo}
                markComplete = {this.onChangeComplete}
                isCheckedAll = {isCheckedAll}
                checkAllTodos = {this.checkAllTodos}
                removeTodo = {this.removeTodo }
            />
            <Footer 
                status = {status}
                setStatusFilter = {(status) => this.setState({ status })} 
                clearCompleted = {this.clearCompleted}
                numOfTodos = {listTodos.length}
                numOfTodosLeft = {fillterByStatus(listTodos, 'ACTIVE').length}
            />
        </div>
        );

    }
}

export default App;

