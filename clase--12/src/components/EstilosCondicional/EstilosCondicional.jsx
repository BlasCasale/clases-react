import React from 'react'
import './EstilosCondicional.css'

// podemos usar estilos condicionales en linea o en clases

const EstilosCondicional = ({booleano, clase}) => {
  return (
    <div>
        <h4 style={{color: booleano ? "green" : "red"}}>Estilos condicionales</h4>

        <h4 className={booleano ? "amarillo" : "azul"} >Trabajando con className</h4>

        <h3 className={booleano && "azul"}>Ejemplo con operador &&</h3>

        <h4 className={clase}>Recibo una clase por props</h4>
    </div>
  )
}

export default EstilosCondicional