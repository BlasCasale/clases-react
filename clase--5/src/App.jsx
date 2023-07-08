import Contador from "./Contador/Contador";
import Categorias from "./Categorias/Categorias";
import UseRef from "./UseRef/UseRef";
import UseRefDom from "./UseRefDom/UseRefDom";

function App() {



  return (
    <>
      <Contador stock={10} inicial={1} />
      <Categorias />
      <UseRef/>
      <UseRefDom/>
    </>
  );
}

export default App;
