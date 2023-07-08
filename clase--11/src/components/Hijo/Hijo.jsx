// utilizando useContext

import { Context } from "../../context/context";
import { useContext } from "react";

const Hijo = () => {
    const herencia = useContext(Context)

    return (
        <div>
                <p>Mi herencia es de: ${herencia.efectivo}.</p>
                <p>Herede: {herencia.propiedades} propiedades.</p>
                <p>Ligue: {herencia.vehiculos} vehiculos.</p>
        </div>
    )
}

export default Hijo


/*

Utilizando el consumer:

import React from 'react'
import { Context } from '../../context/context'

const Hijo = () => {
  return (
    <Context.Consumer>
      {
        (herencia) => (
            
            <div>
                <p>Mi herencia es de: ${herencia.efectivo}.</p>
                <p>Herede: {herencia.propiedades} propiedades.</p>
                <p>Ligue: {herencia.vehiculos} vehiculos.</p>
            </div>
            
        )
      }  
    </Context.Consumer>
  )
}

export default Hijo
*/
