import {SET_HEADER_RIGHT, SET_HEADER_SEARCH} from './type';
import fetch from 'isomorphic-fetch';


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
function requestPosts() {
    return {
      type: REQUEST_POSTS
    }
}
function receivePosts(json) {
    return {
      type: RECEIVE_POSTS,
      paradas: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }
function fetchPosts() {
    return dispatch => {
      dispatch(requestPosts())
      return fetch(`https://json-server-cine.herokuapp.com/features`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
    }
  }

const actionCreators = {
    setHeaderRight,
    setHeaderSearch,
    requestPosts,
    receivePosts,
    fetchPosts


}

export { actionCreators };