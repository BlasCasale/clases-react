import React from 'react'
import { useState } from 'react'

const BotonCondicional = () => {

  const [usuario, setUsuario] = useState("")

  const [pass, setPass] = useState("")

  const [verificado, setVerificado] = useState(false)

  const deshabilitarUsuario = () => {
    setVerificado(false)
  }
  const habilitarUsuario = (e) => {
    e.preventDefault()

    if (usuario === "tinki" && pass && "winki"){
      setVerificado(true)
    } else {
      setUsuario("ladron")
      setPass("gil")
    }
  }

  const guardarUsuario = (e) => {
    setUsuario(e.target.value)
  }
  const guardarPass = (e) => {
    setPass(e.target.value)
  }

  return (
    <>
        {verificado ? (<button onClick={deshabilitarUsuario}>Cerrar sesión</button>) : (
          <form onSubmit={habilitarUsuario}>
            <label htmlFor="name">Usuario</label>
            <input type="text" id='name' onChange={guardarUsuario} value={usuario}/>
      
            <label htmlFor="pass">Contraseña </label>
            <input type="password" id="pass" onChange={guardarPass} value={pass}/>
      
            <button type='submit'>Iniciar sesión</button>
      
          </form>
        )}
    </>
  )
}

export default BotonCondicional