import { useContext, useState } from "react"
import { contexto } from "./CartContext/CartContext"
import { db } from "../firebase"

const Carrito = () => { 

    const {carrito, clearCart,removeItem } = useContext(contexto)


    const handleEliminaFila = (item) => {

        removeItem(item)
        //Al pasarlo pagina queda en blanco con errores pero no encuentro la vuelta
    }    
    return (
        <div> 
            <h1>Carrito</h1>

{            carrito.map((item)=>
            {
            return (
                
                <div key = {item.item.id}>
                        <h2>{item.item.title}</h2>
                        <p>Cantidad: <span> {item.quantity} </span></p>
                        <p>Total: {item.quantity * item.item.price}</p>
                        <button onClick={() => handleEliminaFila(item.item.id) } > eliminar del carrito </button>
                </div>       
            ) 
            

            })  
            }        
            <button onClick={() => clearCart()}>Vaciar Carrito</button> 
            <button>Ir a pagar</button>
        </div>

    )


}

export default Carrito