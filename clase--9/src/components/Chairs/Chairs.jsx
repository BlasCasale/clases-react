import React from 'react'

// useParams es un hook que nos permite acceder a los params de la url en los componentes funcionales
//ej: https://cellshop.com/chairs/123
// puedo obtener ese 123 que podria ser el id de un prod
// en el enrutado tenemos que incluir /:id
import { useParams } from 'react-router-dom'

const Chairs = () => {
    const {id} = useParams()
    // obtengo el valor del param y lo voy a desestructurar

  return (
    <div>
        <h2>Sección sillas</h2>
        <p>ID producto: {id}</p>
    </div>
  )
}

export default Chairs