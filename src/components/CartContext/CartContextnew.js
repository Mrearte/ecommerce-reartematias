import React from 'react'
import { createContext, useState } from "react"

export const contexto = createContext()
const {Provider} = contexto


export const  MiCustomProvider = ({children}) => {

    const [preciototal, setpreciototal] = useState(0)
    const [cantidad_total, setcantidad_total] = useState(0)
    const [carrito, setCarrito] = useState([]) //guardo todas las cosas que entren en el carrito



    const agregarProducto = (product,cantidad_total) => {
        const isInCart = (id ) => {
            return carrito.find(prdId => prdId.id === id )
        }
        if (isInCart(item.id))
        {
            const newCart = [...cart];
            for (const itemcarrito of newCart)
            {
                if(itemcarrito.item.id == item.id)
                {
                    item.quantity = item.quantity + quantity;
                }
            }
            setCarrito(newCart)
        }
        else 
        {
            setCarrito([
                ...cart,{
                    item: item, 
                    quantity : quantity
                }
            ])

        }

    }


    const eliminarProducto = (id) => {}
    const vaciarCarrito = () => { 
        setCarrito([])
     }
    const estaEnCarrito = (producto) => {


    }



    const valorContext = 
    {
        cantidad_total,
        preciototal,
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        estaEnCarrito,
        cart
    }

    return (
        <Provider value = {valorContext}>
            {children}
        </Provider>
    )

}



export default MiCustomProvider 