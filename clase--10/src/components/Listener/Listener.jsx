import React from 'react'

// tambien podemos utilizar los "eventListener"
// trabajando con el objeto window
// este objeto global representa la ventana del navegador


const Listener = () => {
    // llamamos al objeto global window y al metodo addEventListener
    window.addEventListener("resize", () => console.log("cambiaste el tamaño"))
    
  return (
    <div>

    </div>
  )
}

export default Listener