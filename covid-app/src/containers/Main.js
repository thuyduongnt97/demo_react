import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index"
import WorldTotal from '../components/WorldTotal'

class Main extends React.Component{
    render(){
        return(
            <WorldTotal data = {this.props.data} />
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};


export default connect (mapStateToProps, actionCreators)(Main);