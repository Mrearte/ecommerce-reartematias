
import {useState} from "react"


const ItemCount  = ({stock, initial, onAdd ,onClick}) => {
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
        console.log(contador)
    }
    return (

        <div id = "Botonera">

            <div>
                {/* <button onClick={BtnResta} id ="BtnResta" > - </button>
                <input type="number" name="" id="" value = {contador}/>
                <button onClick={BtnSuma} id ="BtnSuma"> + </button> */}

            </div>
            <button onClick={handleClick}>+</button>
            <span>Cantidad: {contador}</span>
            <button onClick={BtnResta} id ="BtnResta" >-</button>
            <button onClick={handleConfirma} >Agregar al carrito</button>
        </div>        
    )

}

export default ItemCount