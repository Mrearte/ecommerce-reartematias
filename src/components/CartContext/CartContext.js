import React from 'react'
import { createContext, useState } from "react"


export const contexto = createContext()
const {Provider} = contexto


const MiCustomProvider = ({children}) => {


    const [carrito, setCarrito] = useState([])
    const [preciototal, setpreciototal] = useState(0)
    const [cantidadtotal, setcantidadtotal] = useState(0)
    console.log(`previa , ${cantidadtotal}`)

    const addItem = ( item, quantity ) => {
        //si ya esta en el carrito, lo busco y le sumo la cantidad
        if (isInCart(item.id)){
            const newCart = [...carrito];
            for (const element of newCart){
                if (element.item.id === item.id){
                    element.quantity = element.quantity + quantity;
                }
                console.log(newCart)
                setCarrito(newCart)
                setcantidadtotal(cantidadtotal + quantity )
                setpreciototal(preciototal + (quantity * item.price) )
                console.log(`item id , ${cantidadtotal}`)
            }

        } else {
            setCarrito([
                ...carrito,
                {
                    item: item,
                    quantity: quantity
                    
                }
                
            ])     

            setcantidadtotal(cantidadtotal + quantity )
            setpreciototal(preciototal + (quantity * item.price) )
            console.log(`item id , ${cantidadtotal}`)
        }
    }

    const isInCart = ( id ) => {
        return carrito.find(e => e.item.id === id);
    }

    const removeItem = ( id ) => {
        const newCart = [...carrito].filter(element => element.item.id != id);
        setCarrito(newCart);
        // cantTotal()
    }

    const clearCart = () => {
        setCarrito([])
    }


    const valorContext = 
    {
        cantidadtotal,
        preciototal,
        carrito: carrito,
        addItem,
        isInCart,
        removeItem,
        clearCart

    }

    return (
        <Provider value = {valorContext}>
            {children}
        </Provider>
    )

}



export default MiCustomProvider 