/** CLASE 1 - REACT **/

//¿Que es React?
//Librería de JS. 
//¿Cuando nace? 
//Mayo de 2013 en las oficinas de Facebook. 

//¿Cuales son sus ventajas? 

//1) Crear aplicaciones web mucho más rápidas. Gracias a la técnica del Virtual DOM que me permite actualizar algunas partes de mi aplicación sin recargar toda la página. (Lo vemos la clase que viene)

//2) Basado en Componentes: son conjuntos de elementos qeu cumplen una función específica. (Por ejemplo un botón).

//No se olviden que hay componentes padres y componentes hijos. 

//3) Tiene un enfoque DECLARATIVO. 

//¿Qué es esto?


//Enfoque declarativo: Estilo de programación en donde nos enfocamos en lo que se quiere lograr y no tanto el el como. 

//Enfoque imperativo: es un estilo de programación en donde se detallan paso a paso las acciones a realizar para lograr un resultado específico. 
//Se enfoca en CÓMO SE LOGRA UN RESULTADO.

/** EJEMPLO EN CÓDIGO **/

//EJEMPLO A: Queremos crear un array de número pares entre el 0 y el 10. 

//¿Cómo lo podemos resolver con el enfoque imperativo? 

const array = []; 

for(let i = 0; i <= 10; i++) {
    if( i % 2 == 0) {
        array.push(i);
    }
}

console.log(array);

//De modo declarativo: 

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter(numero => numero % 2 == 0);

console.log(pares);

//EXPRESIÓN. 
//Una expresión es una combinación de valores, variables y operadores que pueden ser evaluados para producir un resultado. 

//EJEMPLOS: 

let numero = 5; 

let sumas = numero + 5; 

//FUNCIONES EN JS: 

//Es un bloque de código con una tarea específica que puede ser reutilizado muchas veces. 

//Pueden ser DECLARADAS O EXPRESADAS. 

//Ejemplo de una función declarada: 

function sumamos(numeroUno, numeroDos) {
    //Cuerpo de la función 
    return numeroUno + numeroDos;
}

console.log(sumamos(50,10));

//¿Una función declarada se puede invocar antes de su declaración? 
//Si, porque el motor de JS las lee antes de ejecutar el código, y esto se conoce como hoisting. 

//FUNCIONES EXPRESADAS: 
//Son aquellas funciones que se asignan a una variable. 

//Función anónima: 

const sumaDos = function(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumaDos(60,10));

//Función Flecha: 
//Es una versión resumida de la función anónima. 

const sumaTres = (numeroUno, numeroDos) => numeroUno + numeroDos;

console.log(sumaTres(80,10));

//Y si no tenemos parámetros, podemos colocar los parentesis vacíos. 

const sumaCuatro = () => 10 + 10;
console.log(sumaCuatro());

//TRABAJAR POR MÓDULOS: 
//Es una forma de dividir nuestro trabajo o código en partes más pequeñas. 

//Lo logramos utilizando las palabras "export" e "import"