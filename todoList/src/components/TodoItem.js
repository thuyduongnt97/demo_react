import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import check from '../img/check.png';
import checkDone from '../img/checkbox.png';

class TodoItem extends Component {   
    render() { 
        const {item, onClick} = this.props;
        let url = check;
        if(item.isDone){
            url = checkDone;
        }
        return ( 
            <tr className = {classNames('TodoItem', {'TodoItem-done':item.isDone})}>
                <th scope="row">
                    <img src ={url} onClick= {onClick} />{item.title}
                </th>
            </tr>
            
            
        );
    }
}
 
export default TodoItem;