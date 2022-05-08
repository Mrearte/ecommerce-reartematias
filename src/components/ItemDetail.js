import ItemCount from "./ItemCount"
import { useState } from "react"


const ItemDetail = ({key, title, description, pictureUrl, price})=>{

    const[cantidad, setcantidad] = useState('') 

    const handleClick = (a) => {
        setcantidad(a)

    }
    console.log("cantidad:" + cantidad)
    return (
            <div id = 'ItemDetail' key = {key}> 
                <h2>{title}</h2>
                <img src={pictureUrl} alt="" />
                <p>Descripcion del producto: {description} </p> 
                <p>Precio: <span>{price}</span></p>    
                {/* <button onClick={handleClick}>click</button> */}
                <ItemCount onClick = {handleClick} initial = {1} stock = {5}/>
            </div>
            
    )
}

export default ItemDetail




