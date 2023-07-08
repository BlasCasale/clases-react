import './Vista.css'
import { useState } from 'react'

const Vista = () => {

    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

    return (
        <div className= {estilo}>
            
            <button onClick={ cambiarModo } > {modoOscuro ? "Claro" : "Oscuro"} </button>
            <h2>Componente Vista </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae quis quas ab laudantium quisquam eos nam iusto dolorum explicabo exercitationem consequatur harum aliquid voluptatum, debitis, atque minima incidunt quae?</p>
        </div>
    )
}

export default Vista
