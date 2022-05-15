import { useContext, useState } from "react"
import { contexto } from "./CartContext/CartContext"
import Cart from "./Cart"

const Carrito = () => { 

    const {carrito} = useContext(contexto)
    const {clearCart} = useContext(contexto)
    const {removeItem} = useContext(contexto)





    return (
        <div> 
            <h1>Carrito</h1>

            <Cart carrito = {carrito}  removeItem = {removeItem}
            />
            
            <button onClick={clearCart}>Vaciar Carrito</button> 
            <button>Ir a pagar</button>
        </div>

    )


}

export default Carrito