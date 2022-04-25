import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
 
const ProductsDatabase = [
    {
        id: 1, 
        title: 'Product 1', 
        price: 99,
        pictureUrl:"../imagenes/productos/producto1.png"
    }, 
    {
        id: 2, 
        title: 'Product 2', 
        price: 25,
        pictureUrl:"../imagenes/productos/producto1.png"
    }, 
    {
        id: 3, 
        title: 'Product 3', 
        price: 53,
        pictureUrl:"../imagenes/productos/producto1.png"
    }, 
    {
        id: 4, 
        title: 'Product 4', 
        price: 990,
        pictureUrl:"../imagenes/productos/producto1.png"
    }, 
    {
        id: 5, 
        title: 'Product 5', 
        price: 959,
        pictureUrl:"../imagenes/productos/producto1.png"
    }, 
]


const ItemListContainer = ({greeting})=>{
const onAdd = () =>{}


const[products,setProducts] = useState([])

useEffect( () => {

    setTimeout(()=>{
        setProducts(ProductsDatabase)
    },2000)

}, [])


    return (
            <>
            {/* {greeting} */}
            {/* <ItemCount stock = "5" initial = "1" onAdd = {onAdd}  /> */}
            
            <ItemList items = {ProductsDatabase} />
            
            
            </>
            
    )
}

export default ItemListContainer




