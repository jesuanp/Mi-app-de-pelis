import { search, addFavorite } from './actions.js';

let initianState = {
    searchResult: [],
    favorite: []
}

export function reducer(state = initianState, action){
    switch(action.type){
        case search: return {
            ...state,
            searchResult: action.payload
        }
    default: return state
    }
}