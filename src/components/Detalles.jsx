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
                        <p>Nombre: {e.Title}</p>
                        <p>Estreno: {e.Released}</p>
                        <p>Duracion: {e.Runtime}</p>
                        <p>Genero: {e.Genre}</p>
                        <p>Director/es: {e.Director}</p>
                        <p>Idioma de la peli: {e.Language}</p>
                        </div>
                        <img src={`${e.Poster}`} alt="poster" className='img'/>
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