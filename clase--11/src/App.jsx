import Abuelo from "./components/Abuelo/Abuelo";
import { Context } from "./context/context";


function App() {

  const herencia = {
    efectivo: 1000000000,
    propiedades: 6,
    vehiculos: 5,
  }

  return (
    <>

      <Context.Provider value={herencia}>

        <Abuelo/>

      </Context.Provider>

    </>
  );
}

export default App;
