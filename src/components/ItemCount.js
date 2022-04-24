
import {useState} from "react"


const ItemCount  = (props) => {
    const [contador,setContador]  = useState(parseInt(props.initial))


    const BtnSuma = () =>{
            if (contador >= props.stock) {
                console.log("Supera el stock permitido")
        } else {
            setContador(contador + 1)
            console.log(contador)
        }
    }
    const BtnResta = () =>{

        setContador(contador - 1)
    }
    console.log(props)
    return (

        <div id = "Botonera">

            <div>
                <button onClick={BtnResta} id ="BtnResta" > - </button>
                <input type="number" name="" id="" value = {contador}/>
                <button onClick={BtnSuma} id ="BtnSuma"> + </button>
            </div>
            <button>Agregar al carrito</button>
        </div>        
    )

}

export default ItemCount