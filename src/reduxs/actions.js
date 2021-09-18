export const search = 'SEARCH';
export const addFavorite = 'ADD_FAVORITE';
export const detallesDeLaPeli = 'DETALLES'
export const removeFavorito = 'REMOVE_FAV'

export function busqueda(movie){
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=efe1435f&s=${movie}`)
        .then(r => r.json())
        .then(json => {
            dispatch({type: search, payload: json.Search})
        })
    }
}

export function addFavoritos(obj){
    return {
        type: addFavorite,
        obj
    }
}

export function detalles(idMovie){
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=efe1435f&i=${idMovie}`)
        .then(r => r.json())
        .then(json => {
            dispatch({type: detallesDeLaPeli, payload: json})

        })
    }
}

export function removeFav(id){
    return {
        type: removeFavorito,
        id: id
    }
}