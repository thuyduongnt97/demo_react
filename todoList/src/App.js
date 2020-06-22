  
import React, { PureComponent } from 'react';
import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'

import './css/Todo.css'
class App extends PureComponent {
    render() {
        // const { listTodos, isCheckedAll, status, todoEditingId } = this.state
        return (
        <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
        </div>
        );

    }
}

export default App;
