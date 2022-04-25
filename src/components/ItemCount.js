
import {useState} from "react"


const ItemCount  = ({stock, initial, onAdd}) => {
    const [contador,setContador]  = useState(parseInt(initial))


    const BtnSuma = () =>{
            if (contador >= stock) {
                console.log("Supera el stock permitido")
        } else {
            setContador(contador + 1)
            console.log(contador)
        }
    }

    const BtnResta = () =>{
        setContador(contador - 1)
        
    }


    const BtnConfirma = () => {
        onAdd(contador)
        console.log(contador)
    }
    return (

        <div id = "Botonera">

            <div>
                <button onClick={BtnResta} id ="BtnResta" > - </button>
                <input type="number" name="" id="" value = {contador}/>
                <button onClick={BtnSuma} id ="BtnSuma"> + </button>
            </div>
            <button onClick={BtnConfirma} >Agregar al carrito</button>
        </div>        
    )

}

export default ItemCount