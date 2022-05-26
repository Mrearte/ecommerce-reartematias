import { Link } from "react-router-dom"
import { useContext } from "react"
import {contexto} from "./CartContext/CartContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CartWidget = () => { 
// const res =  useContext(contexto)
const {cantidadtotal} = useContext(contexto)

    return (
    <Link to="/carrito">
    <ShoppingCartIcon></ShoppingCartIcon>
    {cantidadtotal}
    </Link>
    ) 
}
export default CartWidget  