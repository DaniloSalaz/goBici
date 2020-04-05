import {SET_HEADER_RIGHT, SET_HEADER_SEARCH,REQUEST_POSTS, RECEIVE_POSTS, UPTADE_PARADAS } from './type';

const initialState = {
    isHeaderRight: true,
    isHeaderSearch: false,
    isFetching:false,
    items:[]
}


function applySetHeaderRigth(state) {
    return {
        ...state,
        isHeaderRight: !state.isHeaderRight
    }
}

function applySetHeaderSearch(state) {
    return {
        ...state,
        isHeaderSearch: !state.isHeaderSearch
    }
}
function applyPost(state, action) {
    return{
        ...state,
        isFetching: true,
        items: action.paradas,
        lastUpdated: action.receivedAt
    }
}
function applyRequestPost(state) {
    return{
        ...state,
        isFetching: false
    }
}
function applyUpdatePost(state, action) {
    return{
        ...state,
        isFetching: true,
        items: action.paradas,
        lastUpdated: action.receivedAt
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case SET_HEADER_RIGHT:
            return applySetHeaderRigth(state);
        case SET_HEADER_SEARCH:
            return applySetHeaderSearch(state);
        case REQUEST_POSTS:
            return applyRequestPost(state, action);
        case  RECEIVE_POSTS:
            return applyPost(state,action);   
        default:
            return state;        
    }
}

export default reducer;