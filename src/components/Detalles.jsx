import React from 'react'
import {connect} from 'react-redux'
import './Detalles.css';


function Detalles({datallesPeli}){

    // (function(){
    //     console.log(datallesPeli)
    // })()

    return (
        <div className='todo'>
            {
                datallesPeli && datallesPeli.map(e =>
                    <div key={e.imdbID} id={e.imdbID} className='caja'>
                        <div>
                        <p className='texto'>Nombre: {e.Title}</p>
                        <p className='texto'>Estreno: {e.Released}</p>
                        <p className='texto'>Duracion: {e.Runtime}</p>
                        <p className='texto'>Genero: {e.Genre}</p>
                        <p className='texto'>Director/es: {e.Director}</p>
                        <p className='texto'>Idioma de la peli: {e.Language}</p>
                        <p className='texto'>Awards: {e.Awards}</p>
                        </div>
                        <img src={`${e.Poster}`} alt="poster" className='imagen'/>
                    </div>
                )
            }
        </div>
    )
}

function mapStateToProps(store){
    return {
        datallesPeli: store.detalles
    }
}

export default connect  (mapStateToProps)(Detalles)