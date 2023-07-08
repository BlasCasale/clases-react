//vamos a trabajar con "useState" que me permite crear un estado.

//1) Primero tengo que importar useState. 
import { useState } from "react";

//2) Segundo, useState me retorna un array con dos elementos. El primero es el estado actual y el segundo es una función que me actualiza ese estado. 


const ItemCount = () => {
    let inicial = 1; 
    let maximo = 10; 

    const [contador, setContador] = useState(inicial);
    //Entre () colocamos el valor inicial del estado. 

    //3) Creamos dos funciones para incrementar y decrementar el contador. 

    const incrementar = () => {
        if(contador < maximo) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }
    
  return (
    <>
        <button onClick={ incrementar } >+</button>
        <p> {contador} </p>
        <button onClick={ decrementar } >-</button>
        {
            //Incrementar y decrementar van sin parentesis porque si no se ejecutarían al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 
        }
      
    </>
  )
}

export default ItemCount
