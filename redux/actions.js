import {SET_HEADER_RIGHT, SET_HEADER_SEARCH} from './type';

function setHeaderRight(isHeaderRight) {
    return {
        type: SET_HEADER_RIGHT,
        isHeaderRight
    }
}

function setHeaderSearch(isHeaderSearch) {
    return{
        type: SET_HEADER_SEARCH,
        isHeaderSearch
    }
    
}

const actionCreators = {
    setHeaderRight,
    setHeaderSearch
}

export { actionCreators };