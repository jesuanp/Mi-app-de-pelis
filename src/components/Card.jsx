import React from 'react'
import { connect } from 'react-redux'
import './Card.css'


function Card({peliculas}){

    return (
        <>
            {
                peliculas && peliculas.map(m => 
                <div key={m.imdbID} id={m.imdbID} className="card">
                    <div className="texto">
                        <div>Pelicula: {m.Title}</div>
                        <div>Fecha de estreno: {m.Year}</div>
                    </div>
                    <div>
                        <img src={m.Poster} alt="poster" className="img" />
                    </div>
                </div>)
            }
        </>
    )
}

const mapStateToProps = (store) =>{
    return {
        peliculas: store.searchResult
    }
}

export default connect (mapStateToProps)(Card)