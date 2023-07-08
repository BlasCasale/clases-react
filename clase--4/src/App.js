//Componente: conjunto de elementos que cumplen una función específica. 

/*
  Ventajas de trabajar con componentes: 

  - Reutilizamos código. 
  - Favorece la separación de responsabilidades. 
  - El código es más fácil de entender. 
  - Mejora el rendimiento de la aplicación. 

*/

/*
  Características principales: 
  - Pueden recibir props (propiedades).
  - Renderizan un único componente. 
  - Pueden tener un estado. 
*/

//¿Qué es el estado? Es un objeto que contiene información del componente que puede cambiar durante la ejecución de la App.

//Utilizamos "useState" que me permite crear un estado en un componente funcional. 


import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Mensaje from "./components/Mensaje/Mensaje";
import Vista from "./components/Vista/Vista";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundillo" />
      <ItemCount/>
      <Mensaje/>
      <Vista/>
    </>
  );
}

export default App;
