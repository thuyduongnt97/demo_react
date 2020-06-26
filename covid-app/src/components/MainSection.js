import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchDataCovidAction from './../getApi/fetchDataCovid';
import {getDataCovid, getDataCovidPending, getDataCovidError} from './../reducers';

import WorldTotal from './WorldTotal'


class MainSection extends Component{
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchDataCovid} = this.props;
        fetchDataCovid();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        return (
            <>
                <WorldTotal />
            </>
        )
    }
}


const mapStateToProps = state => ({
    error: getDataCovidError(state),
    dataCovid: getDataCovid(state),
    pending: getDataCovidPending(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(fetchDataCovidAction, dispatch)
  })
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection );
  
