import { useContext, useState } from "react"
import { contexto } from "./CartContext/CartContext"
import { db } from "../firebase"
import {addDoc, collection} from "firebase/firestore"
 
const Carrito = () => { 

    const {carrito, clearCart,removeItem } = useContext(contexto)
    const [idOrden, setIdorden] = useState("")

    const guardarCompra = () => {
        const guardaProductos = collection(db,"Orden")
        const orden = {
            buyer:{
                name: "nombre",
                phone: "phone",
                email: "email"
            },
            items: carrito,
            date: "",
            total: "666"
        }

    const agregaDDBB = addDoc(guardaProductos,orden)
    agregaDDBB
    .then((resultado) => {
        setIdorden(resultado.id) 
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    return (
        <div> 
            <h1>Carrito</h1>

{            carrito.map((item)=>
            {
            return (
                <div key = {item.item.id}>
                        <h2>{item.item.title}</h2>
                        <p>Cantidad: <span> {item.quantity} </span>
                        Total: {item.quantity * item.item.price}</p>
                        <button onClick={() => removeItem(item.item.id) } > eliminar del carrito </button>
                </div>       
            ) 

            })  
            }        
            <button onClick={() => clearCart()}>Vaciar Carrito</button> 
            <button onClick={guardarCompra}>Ir a pagar</button>
            {idOrden && <h3>Compra guardada con ID: {idOrden}</h3>}
        </div>

    )


}

export default Carrito