import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tick from './img/tick.png';
class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      TodoItems: [
        {title: 'Title A', isDone: true},
        {title: 'Title B', isDone: false},
        {title: 'Title C', isDone: true}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClickAll.bind(this);
  }

  onItemClicked(item){    
    return(event) => {
      const {TodoItems} = this.state;
      const index = TodoItems.indexOf(item);
      const isDone = item.isDone;
      this.setState({
        TodoItems: [
          ...TodoItems.slice(0,index),
          {
            ...item,
            isDone : !isDone
          },
          ...TodoItems.slice(index+1)
        ]
      }
      );
    }
  };
  
  onKeyUp(event){
    if(event.keyCode === 13){
      const text = event.target.value;
      if(!text){
        return;
      }
      this.setState({
        newItem: '',
        TodoItems: [
          {title : text, isDone : false},
          ...this.state.TodoItems
        ]
      });
    }
    
  }

  onChange(event){
    this.setState({
      newItem : event.target.value
    })
  }
  onClickAll(e){
    
    let isChecked = e.target.checked;
    this.setState(state => {
      const TodoItems = state.TodoItems.map(item => {
        title  : item.title
        isDone : isChecked
      });
      return {TodoItems,};
    });
  }

  render () {
    const {TodoItems, newItem} = this.state;

    return (
      <div className="App">
        <table className=" table table-hover table-bordered">
        <thead>
          <tr>
            <th>
              <input type = "checkbox" onChange = {this.onClickAll}/>
              <input  
                className="form-control col-sm-11" 
                type="text" 
                placeholder=".form-control-lg" 
                value = {newItem}
                onKeyUp = {this.onKeyUp} 
                onChange = {this.onChange}
              />
            </th>
          </tr>
        </thead>
          <tbody>
             
              { 
                TodoItems.map((item, index) => 
                  <TodoItem key = {index} item = {item} 
                  onClick = {this.onItemClicked(item)} />)
              }
          </tbody> 
        </table>
      </div>
    );
  }
}

export default App;
