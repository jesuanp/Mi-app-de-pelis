import axios from 'axios';
export const search = 'SEARCH';
export const addFavorite = 'ADD_FAVORITE';
export const detallesDeLaPeli = 'DETALLES'
export const removeFavorito = 'REMOVE_FAV'

// export function busqueda(movie){
//     return function(dispatch){
//         fetch(`http://www.omdbapi.com/?apikey=efe1435f&s=${movie}`)
//         .then(r => r.json())
//         .then(json => {
//             dispatch({type: search, payload: json.Search})
//         })
//     }
// }

export function busqueda(movie){
    return async function(dispatch){

        const palis = await axios.get(`http://www.omdbapi.com/?apikey=efe1435f&s=${movie}`)
        

        const pelis2 = await axios.get(`http://www.omdbapi.com/?apikey=efe1435f&s=${movie}&page=2`)
        return dispatch({type: search, payload: palis.data.Search.concat(pelis2.data.Search)})
        // return Promise.all([pelis, pelis2])
        // .then(r => {
        //     let peliculas = r[0];
        //     let peliculas2 = r[1];
        //     let pelisConcat = peliculas.concat(peliculas2);
        //     dispatch({type: search, payload: pelisConcat})
        // })
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