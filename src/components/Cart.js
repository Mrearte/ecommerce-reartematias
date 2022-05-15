import React, { useContext } from 'react'
import { contexto } from "./CartContext/CartContext"



const Cart = ({carrito, removeItem}) => {

    const handleConfirma = (item) => {
        removeItem(item.target.id)
        //Al pasarlo pagina queda en blanco con errores pero no encuentro la vuelta
    }    

return (
    <div>
        {
            carrito.map((item)=>
            {
            return (
                <div key = {item.item.id}>
                        <h2>{item.item.title}</h2>
                        <p>Cantidad: <span> {item.quantity} </span></p>
                        <p>Total: {item.quantity * item.item.price}</p>
                        <button onClick={handleConfirma} id = {item.item.id}> eliminar del carrito </button>
                </div>
        
            ) 

            })
        } 
        
    </div>
)
}

export default Cart