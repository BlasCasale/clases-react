import EstilosCondicional from "./components/EstilosCondicional/EstilosCondicional";
import TecnicaDos from "./components/TecnicaDos/TecnicaDos";
import TecnicaTres from "./components/TecnicaTres/TecnicaTres";
import TecnicaUno from "./components/TecnicaUno/TecnicaUno";
import BotonCondicional from "./components/BotonCondicional/BotonCondicional";


function App() {
  return (
    <>
    
      {
        /*
        <TecnicaUno nombre={"samuel"}/>

        <TecnicaDos booleano={false}/>

        <TecnicaTres booleano={true}/>

        <EstilosCondicional booleano={true} clase={"nuevaClase"}/>
        
        <BotonCondicional />
        */
      }

      <Memo />
    </>
  );
}

export default App;

// Tecnicas de renderizado:

// 1) renderizado condicional: mostramos componentes en funcion de una condicion o estado determinado en tiempo de ejecucion

// ejemplo: mostrar/ocultar un btn si el usuario esta logueado