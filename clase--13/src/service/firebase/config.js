// vamos a importar dos funciones de la libreria firebase
// 1) la primera 
import { initializeApp } from "firebase/app";
// 2) la segunda
import { getFirestore } from "firebase/firestore" 

// initializeApp = se usa para inicializar una instancia de Firebase en la App

// getFirestore = se utilizar para obtener una instancia de Firestore



// creamos un objeto con toda nuestra info de la cuenta:
const firebaseConfig = {
  apiKey: "AIzaSyACMq5nzBMSLGwE1k83BDY7aCHT-BuyJ4o",
  authDomain: "proyecto-rjs-c7950.firebaseapp.com",
  projectId: "proyecto-rjs-c7950",
  storageBucket: "proyecto-rjs-c7950.appspot.com",
  messagingSenderId: "712555589683",
  appId: "1:712555589683:web:8f7992a54f188db6797346"
};

// inicializamos firebase y se pasa la config como argumento. esto devuelve una instancia de Firebase
const app = initializeApp(firebaseConfig);

// uso esa instancia de firebase para obetener una instancia de Firestore
export const db = getFirestore(app)
// exporto para que este disponible en la app mia