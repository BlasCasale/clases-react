import React from 'react'
import { useState, useEffect } from 'react'
// importamos las funciones que vamos a utilizar
import { getDocs, collection, query, where } from 'firebase/firestore'
// recuerden en firestore las conlecciones tienen documentos en su interior
// collection me permite obtener una coleccion
// getDocs me permite obtener los documentos de una coleccion
// query lo uso cuando quiero generar una consulta
// where la uso para agregar filtros a mis consultas

import { db } from '../../service/firebase/config'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const myProducts = query(collection(db, "products"), where("price", "<", 20000))
        // collection me pide la const con las key que guarde antes y la clave que puse en firestore
        getDocs(myProducts)
            .then((res) => {
                setProducts(res.docs.map( (doc) => ( {id: doc.id, ...doc.data() } ) ))
                // creo un nuevo array que contenga los datos del producto y ademas el id
            })
        // getDocs me retorna una promesa
    }, [])

  return (
    <div>
        <h2>Productos</h2>
        {
            products.map( (product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <button>Agregar</button>
                </div>
            ))
        }

    </div>
  )
}

export default Products