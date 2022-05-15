import React from 'react'
import { createContext, useState } from "react"


export const contexto = createContext()
const {Provider} = contexto


const MiCustomProvider = ({children}) => {


    const [carrito, setCarrito] = useState([])
    const [preciototal, setpreciototal] = useState(0)
    const [cantidadtotal, setcantidadtotal] = useState(0)
    

    const addItem = ( item, quantity ) => {
        //si ya esta en el carrito, lo busco y le sumo la cantidad
        if (isInCart(item.id)){
            const newCart = [...carrito];
            for (const element of newCart){
                if (element.item.id === item.id){
                    element.quantity = element.quantity + quantity;
                }
            }
            setCarrito(newCart)
            cantTotal()

            
        } else {
            setCarrito([
                ...carrito,
                {
                    item: item,
                    quantity: quantity
                }
                
            ])
            cantTotal()
        }
    }

    const isInCart = ( id ) => {
        return carrito.find(e => e.item.id === id);
    }

    const removeItem = ( id ) => {
        const newCart = [...carrito].map(element => element.id !== id);
        setCarrito(newCart);
        cantTotal()
    }

    const clearCart = () => {
        setCarrito([])
    }


// al ejecutarlo me da lo siguiente 0[object Object]
        const cantTotal = () => 
        { let sumaTotal = carrito.reduce((acc,el)=> acc.quantity + el.quantity)
            setcantidadtotal(cantidadtotal + sumaTotal)
            console.log (cantidadtotal)
        }





    const valorContext = 
    {
        cantidadtotal,
        preciototal:0,
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