import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tick from './img/tick.png';

class App extends Component {
  constructor(){
    super();
    this.state = {
      TodoItems: [
        {title: 'Title A', isDone: true},
        {title: 'Title B', isDone: false},
        {title: 'Title C', isDone: true}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
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
      // text = text.trim();
      // if(!text) return;
      this.setState({
        TodoItems: [
          {title : text, isDone : false},
          ...this.state.TodoItems
        ]
      });
    }
    
  }
  render () {
    const {TodoItems} = this.state;

    return (
      <div className="App">
        <table className=" table table-hover table-bordered">
        <thead>
          <tr>
            <th>
              <img src = {tick}/>
              <input className="form-control col-sm-11" type="text" placeholder=".form-control-lg" onKeyUp = {this.onKeyUp} />
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
