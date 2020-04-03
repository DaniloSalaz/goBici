import {SET_HEADER_RIGHT, SET_HEADER_SEARCH} from './type';

const initialState = {
    isHeaderRight: true,
    isHeaderSearch: false
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

function reducer(state = initialState, action){
    switch(action.type){
        case SET_HEADER_RIGHT:
            return applySetHeaderRigth(state);
        case SET_HEADER_SEARCH:
            return applySetHeaderSearch(state);
        default:
            return state;        
    }
}

export default reducer;