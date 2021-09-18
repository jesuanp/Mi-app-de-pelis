import { search, addFavorite, detallesDeLaPeli, removeFavorito } from './actions.js';

let initianState = {
    searchResult: [],
    favorite: [],
    detalles: []
}

export function reducer(state = initianState, action){
    switch(action.type){
        case search: return {
            ...state,
            searchResult: action.payload
        }
        case addFavorite: return {
            ...state,
            favorite: state.favorite.concat(action.obj)
        }
        case detallesDeLaPeli: return {
            ...state,
            detalles: [action.payload]
        }
        case removeFavorito: return {
            ...state,
            favorite: state.favorite.filter(e => e.imdbID !== action.id)
        }

    default: return state
    }
}