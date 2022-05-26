
import {useState} from "react"
import {Link,NavLink} from "react-router-dom"

const ItemCount  = ({stock, initial, onClick}) => {



    // tengo que mandar la info del carrito 1:27:58 
    const [contador,setContador]  = useState(parseInt(initial))

    const handleClick = () =>{
        // onClick()
        if (contador >= stock) {
            console.log("Supera el stock permitido")
    } else {
        setContador(contador + 1)
    }
    }

    const BtnResta = () =>{
        setContador(contador - 1)
        
    }


    const handleConfirma = () => {
        onClick(contador)
    }
    return (

        <div id = "Botonera">
            <button onClick={() => handleClick()}>+</button>
            <span>Cantidad: {contador}</span>
            <button onClick={() => BtnResta()} id ="BtnResta" >-</button>
            <button onClick={() => handleConfirma() }  >Agregar al carrito 
                </button>
        </div>        
    )

}

export default ItemCount