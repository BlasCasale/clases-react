import React from 'react'
import './Form.css'
import { useState } from 'react'

/* eventos con formulario */

// 1) onSubmit = se dispara cuando hacemos click en el btn submit

const Form = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const handlerSubmit = (e) => {
        e.preventDefault()

        const newClient = { name, surname }
        console.log(newClient)

        setName("")
        setSurname("")
    }

  return (
    <form onSubmit={handlerSubmit}>

        <label htmlFor="name">Nombre:</label>

        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="surname">Apellido:</label>
        
        <input type="text" id='surname' value={surname} onChange={(e) => setSurname(e.target.value)}/>

        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form