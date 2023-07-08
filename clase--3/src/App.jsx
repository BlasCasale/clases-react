import './App.css';
import Form from './components/Form/Form';


const App = () => {


  return (
    <>
      <h1 className='titulo'>Hola Mundillo</h1>
      <Form titulo="Esto va como props" />
    </>
  );
}

//Podes escribir así, lo recomendado es que lo hagas entre llaves. 
{
  //Esto es un comentario.

  /*
  Los componentes tienen 3 caracteristicas: 
  //1) Pueden recibir propiedades. 
  //2) Renderizan un solo elemento. 
  //3) Pueden tener un estado. (lo vemos la clase que viene)
  */


}


export default App;
