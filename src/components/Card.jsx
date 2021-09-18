import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Card.css'
import { addFavoritos, detalles } from '../reduxs/actions.js'

function Card({peliculas, addFavoritos, detalles}){

    // let myRef = useRef(null)

    // function handleOnClink(){
    //     console.log()
    //     detalles()
    // }

    return (
        <>
            {
                peliculas && peliculas.map(m => 
                <div key={m.imdbID} id={m.imdbID} className="card">
                    <div className="texto">
                    <p onClick={()=>detalles(m.imdbID)}>Nombre: <Link to={`/app/detalles/${m.imdbID}`}>{m.Title}</Link></p>
                        <div>Fecha de estreno: {m.Year}</div>
                    </div>
                    <div>
                        <img src={m.Poster} alt="poster" className="img" />
                    </div>
                    <button className='btn2' id={m.imdbID} onClick={()=>addFavoritos({Title: m.Title, Year: m.Year, Poster: m.Poster, imdbID: m.imdbID})}>Add favoritos</button>
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

export default connect (mapStateToProps, {addFavoritos, detalles})(Card)