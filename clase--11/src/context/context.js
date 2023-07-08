import React from "react";

export const Context = React.createContext(null)

// pasos para crear el context.js

// 1) crear el contexto (puedo dar un valor por default, depende con que trabaje)
// 2) importar el contexto a App
// 3) proveer el contexto en el componente App
// 4) quien va a ser el consumidor del context en el componente hijo