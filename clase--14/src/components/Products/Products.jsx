import React from 'react'
import './Products.css'
import { useState, useEffect } from 'react'
import { db } from '../../service/fireConfig'
import { collection, doc, query, updateDoc, onSnapshot } from 'firebase/firestore'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        // hacemos consulta a la collection mediante query
        const q = query(collection(db, "prueba"))

        // onSnapshot es una funcion que escucha los cambios en la consulta
        const modify = onSnapshot(q, function(querySnapshot) {
            const docs = []
            querySnapshot.forEach(function (doc){
                docs.push({id: doc.id, ...doc.data() })
            })
            setProducts(docs)
        })
        return () => {
            modify()
        }
    }, [])

    const handleBuy = (id, stock) => {
        if (stock > 0) {
            const productRef = doc(db, "prueba", id)
            updateDoc(productRef, {stock: stock - 1})
            .then(() => console.log("hecho"))
            .catch((error)=> console.log(error))
        }
        
    }


  return (
    <div className='products'>
        {
            products.map(prod => (
                <div className='product' key={prod.id}>
                    <p>{prod.nombre}</p>
                    <p>${prod.precio}</p>
                    <p>Stock: {prod.stock}</p>
                    <button onClick={() => handleBuy(prod.id, prod.stock)}>Comprar</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products