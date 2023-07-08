import { useState } from "react"
//1) Importamos la función. 
//2) useState me retorna una array con dos elementos. El primero es el estado actual y el segundo una función para actualizar ese estado.

const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false)
    //valor inicial del estado = false    

    const manejadorMensaje = () => {
        setMensaje(!mensaje)
        //! invierte el valor de la variable booleana. 
    }


  return (
    <div>
        <br />
        <button onClick={ manejadorMensaje }> {mensaje ? "Ocultar" : "Mostrar"} </button>
        {mensaje && <h2>Aguante el useState</h2>}

        {
            //&& operador lógico que evalúa la expresión de la izquierda. 
        }
      
    </div>
  )
}

export default Mensaje
