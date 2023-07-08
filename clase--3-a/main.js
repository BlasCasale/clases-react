/* SUGAR SYNTAX */

//¿Qué es ? La utilización de operadores avanzados con la idea de simplificar el código. 

//1) Plantillas literales: Las usamos a traves de las backsticks ``
// (alt + 96) y me permite simplificar la concatenación de datos. 

let nombre = "Pepe Argento";
let trabajo = "Zapatería"; 

let mensaje = ` ${nombre} trabaja en una ${trabajo}`;

console.log(mensaje);

//2) Operador Ternario: Es una simplificación de la estructura if/else. 

//Sintaxis: condicion ? codigoSiEsVerdad : codigoSiEsFalso;

let llueve = true;

console.log(llueve ? "tortas fritas y netflix" : "hacemos un asado");

let respuesta = llueve ? "tortas fritas y netflix" : "hacemos un asado";

console.log(respuesta);


//3) Operador Spread: Operador de propagación. 
//Se utiliza con elementos iterables (arrays, objetos) enviando cada uno de sus elementos como parámetros a una función. 

const nombres = ["Juan", "Pedro", "Maria", "Jose"];

console.log(nombres);

//Si utilizo el operador spread:

console.log(...nombres);

console.log(nombres[0], nombres[1], nombres[2], nombres[3]);

//Copiar objetos: 

const alumno = {
    nombre: "Coki",
    apellido: "Argento",
    edad: 37
}

//No puedo hacer esto: 

//const alumnoDos = alumno; 

//Si hago esto estoy copiando la referencia en memoria. 

//Para copiar objetos de forma correcta tenemos que utilizar el operador SPREAD: 

const alumnoTres = {... alumno};

console.log("Vemos al alumno 3:");
console.log(alumnoTres);

//Copiamos arrays: 

const a = [1,2,3];
const b = [4,5,6];

const nuevoArray = [...b, ...a];
console.log(nuevoArray);

//Método SORT, método destructivo!!! 

nuevoArray.sort((a,b)  => a - b);
console.log(nuevoArray);

//4) Desestructuración de Objetos: 
//Es una expresión de JS que permite desempaquetar valores de ayyras u objetos en distintas variables. 

//Ejemplo: 

const bart = {
    nombre: "Bart",
    apellido: "Simpson", 
    edad: 10,
    escuela: "Sprinfield Elementary School"
}

//Hago lo siguiente: 

let {nombre:nombrecilio, apellido, edad, escuela} = bart;

console.log(nombrecilio);
console.log(edad);

//5) Desestructuración de arrays: 

let frutas = ["Manzana", "Pera", "Naranja", "Vino"];

let [,, fruta3, fruta4] = frutas;

console.log(fruta4);

//6) Acceso Condicional a Propiedades de un objeto: 

const empleado = null; 

console.log(empleado?.nombre);

//Lo utilizo para controlar errores y evitar que se rompa la aplicación. 










