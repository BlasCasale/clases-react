import React from 'react'
// 3) operador ternario:
// 

const TecnicaTres = ({booleano}) => {
  return (
    <div>
        {
            booleano ? <h3>Acceso permitido</h3> : <h3>Acceso denegado</h3>
        }
    </div>
  )
}

export default TecnicaTres