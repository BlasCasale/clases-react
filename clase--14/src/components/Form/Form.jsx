import React from 'react'
import { useState } from 'react'
import { db } from '../../service/fireConfig'
import { collection, addDoc } from 'firebase/firestore'
// addDoc es para poner datos en la base de datos

const Form = () => {
    const [user, setUser] = useState({name: "", lastName: "", cellphone: ""})

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(collection(db, "users"), {
            name: user.name,
            lastName: user.lastName,
            cellphone: user.cellphone,
        })
        setUser({name: "", lastName: "", cellphone: ""})
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input required onChange={onChange} type="text" name='name' value={user.name}/>

        <label htmlFor="lastName">Apellido:</label>
        <input required onChange={onChange} type="text" name='lastName' value={user.lastName} />
        
        <label htmlFor="cellphone">Celular:</label>
        <input required onChange={onChange} type="text" name='cellphone' value={user.cellphone}/>

        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form