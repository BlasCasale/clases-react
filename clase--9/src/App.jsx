import Cellphone from "./components/Cellphone/Cellphone";
import Chairs from "./components/Chairs/Chairs";
import Computers from "./components/Computers/Computers";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
// importamos componentes de React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      {
        /*<h1>Enlaces</h1>
        <h2>Enlaces absolutos</h2>
        <p>Son los enlaces que nos derivan a páginas de terceros.</p>
        <a href="https://infobae.com" target="_blank">Diario Infobae</a>
  
        <h2>Enlaces relativos</h2>
        <p>Son enlaces que nos derivan a páginas de mi propio sitio.</p>
        no usamos la etiqueta "a" para enlazar paginas
        */
      }
  
      <BrowserRouter>
        <Menu/>

        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/computers" element={ <Computers/> }/>
          <Route path="/chairs/:id" element={ <Chairs/> }/>
          <Route path="/cellphone" element={ <Cellphone/> }/>
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
