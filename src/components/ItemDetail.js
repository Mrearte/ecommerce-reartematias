import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { contexto } from "./CartContext/CartContext"

const ItemDetail = ({producto})=>{

    const[cantidad, setcantidad] = useState('') 

    const {addItem} = useContext(contexto)

    const handleClick = (cantidad_total) => {
        setcantidad(cantidad_total)
        addItem(producto,cantidad_total)
    }
    console.log("cantidad:" + cantidad)
    return (
            <div id = 'ItemDetail' key = {producto.key}> 
                <h2>{producto.title}</h2>
                <img src={producto.pictureUrl} alt="" />
                <p>Descripcion del producto: {producto.description} </p> 
                <p>Precio: <span>{producto.price}</span></p>    
                {/* <button onClick={handleClick}>click</button> */}
                <ItemCount onClick = {handleClick} initial = {1} stock = {5}/>
                
            </div>
            
    )
}

export default ItemDetail




