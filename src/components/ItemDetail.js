import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { contexto } from "./CartContext/CartContext"

const ItemDetail = ({producto})=>{

    const[cantidad, setcantidad] = useState('') 

    const {addItem} = useContext(contexto)

    const[disabled, setdisabled] = useState(false)

    const handleClick = (cantidad_total) => {
        setcantidad(cantidad_total)
        addItem(producto,cantidad_total)
        setdisabled(true)
        console.log(disabled)
        
    }

    
    console.log("cantidad:" + cantidad)
    return (
            <div id = 'ItemDetail' key = {producto.key}> 
                <h2>{producto.title}</h2>
                <img src={producto.pictureUrl} alt="" />
                <p>Descripcion del producto: {producto.description} </p> 
                <p>Precio: <span>{producto.price}</span></p>    
                <ItemCount onClick = {handleClick} initial = {1} stock = {5} disabled = {disabled} />               
            </div>
            
    )
}

export default ItemDetail




