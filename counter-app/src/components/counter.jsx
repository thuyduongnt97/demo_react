import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value
    };
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };
    renderTag(){
        if (this.state.tags.length === 0) return <p>There are no Tags!</p>
        return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>;
    }
    handleIncrement = () => {
        this.setState({ value : this.state.value + 1 });
    };
    handleDecrease = () => {
        this.setState({ value : this.state.value - 1 });
    };
  

    render() {
        console.log('props', this.props);
        
        return (
        	<div> 
                <h4>{this.props.id}</h4>
        		<span style= {this.styles} className ={this.getBadgeClasses()}> {this.formatCount()} </span> 
                <button onClick={() => this.handleIncrement} className="btn btn-secondary btn-sm ">+</button>
        		<button onClick={() => this.props.handleDecrease} className="btn btn-secondary btn-sm ">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-warning btn-sm ">Delete</button>
            </div>
        );
    }


    formatCount(){
        const {value} = this.state;
        return value === 0 ? 'Zero': value;
    };
    getBadgeClasses (){
        let classes ="badge m-2 badge-";
        classes += this.state.value === 0 ? "warning":"primary";
        return classes;
    };
}



export default Counter;