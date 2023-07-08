import React from 'react'
// 2) el linea con fragment

// la usamos cuando deseamos renderizar un elemento condicional en funcion de una expresion booleana

const TecnicaDos = ({booleano}) => {
  return (
    <>
        {booleano && <h2>Usuario autorizado</h2>}
        {!booleano && <h2>Usuario no encontrado</h2>}
    </>
  )
}

// recibo un booleando, si es true renderizo un elemento, si es false renderizo otro

// ! = negar el valor
export default TecnicaDos