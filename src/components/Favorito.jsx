import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Card.css'
import {detalles, removeFav} from '../reduxs/actions'

function PelisFav({fav, detalles, removeFav}){

    return (
        <>
            {
                fav && fav.map(m =>
                <div key={m.imdbID} id={m.imdbID} className="card">
                    <div className="texto">
                        <div>Nombre: <Link to={`/app/detalles/${m.imdbID}`} onClick={()=>detalles(m.imdbID)}>{m.Title}</Link></div>
                        <div>Fecha de estreno: {m.Year}</div>
                    </div>
                    <div>
                        <img src={m.Poster} alt="poster" className="img" />
                    </div>
                        <button onClick={()=>removeFav(m.imdbID)} className='btn2'>Remover</button>
                </div>)
            }
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        fav: store.favorite
    }
}

export default connect (mapStateToProps, {detalles, removeFav})(PelisFav)