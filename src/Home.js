import React, {useState} from 'react';

export default function Home(){

    const [input, setInput] = useState('')

    return (
        <div>
            <input name="buscar" placeholder="Buscar pelicula..."/>
            <button>Buscar</button>
        </div>
    )
}