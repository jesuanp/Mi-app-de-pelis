import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './Nav.css'
import { busqueda } from '../reduxs/actions';

function Nav({busqueda}){

    const [input, setInput] = useState('')

    let myRef = useRef(null)

    function handleOnChange(){
        setInput(myRef.current.value)
    }

    function handleOnClink(){
        busqueda(input)
    }

    return (
        <>
            <nav className="nav">
                <div className="prueba">
                    <NavLink to="/"className="link">Home</NavLink>
                    <NavLink to="/favoritos" className="link">Favoritos</NavLink>
                </div>
                <div>
                    <input name="buscar" placeholder="Buscar pelicula..." ref={myRef} onChange={handleOnChange} className="input"/>
                    <button onClick={handleOnClink} className="btn">Buscar</button>
                </div>
            </nav>
        </>
    )
}

export default connect(null, {busqueda})(Nav)