import React from 'react'
import './Events.css'
import { useState } from 'react'

/* Eventos */
// 1) eventos manuales:

// 2) eventos automaticos: 

// eventos mas utilizados: 
// click

const Events = () => {
    const [input, setInput] = useState("")

    const handlerClick = () => {
        console.log("click")
    }

    const handlerInput = (e) => {
        // voy a trabajar con el objeto "event"
        setInput(e.target.value)
        // la propiedad target es la referencia al objeto del DOM que disparo el evento
    }

  return (
    <div>
        <button onClick={handlerClick}>Click</button>

        <div className='box'
            onMouseMove={ () => {console.log("nuevo evento")}}
            onMouseEnter={ () => {console.log("entraste")}}
            onMouseLeave={ () => {console.log("saliste")}}
            >

        </div>

        <form >

            <h2> { input } </h2>

            <label htmlFor="campo">Ingrese texto</label>

            <input type="text" id='campo' 
                onChange={handlerInput}
                onKeyDown={ () => {console.log("presionaste una tecla")}}
                onKeyUp={ () => {console.log("soltaste una tecla")}}
            />

            {
                // htmlFor = es igual al for que usamos en html
                // change = se dispara cuando el usuario cambia el valor del input
                // keyDown = cuando presionamos una tecla
                // keyUp = cuando soltamos una tecla
            }
            
        </form>

    </div>
  )
}

export default Events