import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import tickDelete from '../img/tickdelete.jpg';
class TodoItem extends Component {   
    render() { 
        const {item, onClick} = this.props;
        let checked = false;
        if(item.isDone){
            checked = true;
        }
        return ( 
            <tr className = {classNames('TodoItem', {'TodoItem-done':item.isDone})}>
                <th scope="row">
                <input type="checkbox" onClick= {onClick} checked = {checked} /> {item.title}
                </th>
            </tr>
            
            
        );
    }
}
 
export default TodoItem;