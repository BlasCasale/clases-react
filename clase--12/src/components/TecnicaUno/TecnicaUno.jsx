import React from 'react'

// 1) early return: esta tecnica la usamos en JS y evitamos colocar un else

// funcion booleana que me dice si es fin de semana

function esFinde(dia) {
    if(dia === "sabado" || dia === "domingo") {
        return true
    } else {
        return false
    }
}

function esFinDeSemana(dia) {
    if(dia === "sabado" || dia === "domingo") {
        return true
    }
        return false
}

const TecnicaUno = ({nombre}) => {
    if (nombre === "samuel"){
        return <h1>Hola administrador</h1>
    }
    return <h1>Hola {nombre}</h1>
}

export default TecnicaUno