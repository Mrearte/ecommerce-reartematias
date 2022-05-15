import { Link } from "react-router-dom"
import { useContext } from "react"
import {contexto} from "./CartContext/CartContext"



const CartWidget = () => { 
// const res =  useContext(contexto)
const {cantidadtotal} = useContext(contexto)

    return (
    <Link to="/carrito">
    <i className="fa-solid fa-bag-shopping">
        shopping-cart 
    </i>
    {cantidadtotal}
    </Link>
    ) 
}
export default CartWidget  