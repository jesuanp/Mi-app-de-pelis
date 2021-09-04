export const search = 'SEARCH';
export const addFavorite = 'ADD_FAVORITE';

export function busqueda(movie){
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=efe1435f&s=${movie}`)
        .then(r => r.json())
        .then(json => {
            dispatch({type: search, payload: json.Search})
        })
    }
}