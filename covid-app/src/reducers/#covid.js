import {FETCH_DATACOVID_PENDING, FETCH_DATACOVID_SUCCESS, FETCH_DATACOVID_ERROR} from './../actions';

const initialState = {
    pending: false,
    dataCovid: [],
    error: null
}


export function covid(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATACOVID_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_DATACOVID_SUCCESS:
            return {
                ...state,
                pending: false,
                dataCovid: action.payload
            }
        case FETCH_DATACOVID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getDataCovid = state => state.dataCovid;
export const getDataCovidPending = state => state.pending;
export const getDataCovidError = state => state.error;
