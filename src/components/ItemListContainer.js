import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
 
const ProductsDatabase = [
    {
        id: 1, 
        title: 'Product 1', 
        price: 99,
        pictureUrl:"../imagenes/productos/producto1.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }, 
    {
        id: 2, 
        title: 'Product 2', 
        price: 25,
        pictureUrl:"../imagenes/productos/producto1.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }, 
    {
        id: 3, 
        title: 'Product 3', 
        price: 53,
        pictureUrl:"../imagenes/productos/producto1.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

    }, 
    {
        id: 4, 
        title: 'Product 4', 
        price: 990,
        pictureUrl:"../imagenes/productos/producto1.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

    }, 
    {
        id: 5, 
        title: 'Product 5', 
        price: 959,
        pictureUrl:"../imagenes/productos/producto1.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }, 
]


const ItemListContainer = ({greeting})=>{
    const[cargando,setcargando] = useState([])
    const {nombreCategoria} = useParams()


    useEffect( () => {

        if(nombreCategoria == undefined){
            console.log("Pido productos")
        } else 
        {
            console.log("Prido los productos de la categoria:", nombreCategoria)
        }


        const pedido = new Promise((res) =>{
            setTimeout(() => {
                res(ProductsDatabase)
            },2000)
            
        }) 
        pedido
        .then(()=>{
            console.log("Termine el pedido bien!")
            setcargando(false)

        })
    },[nombreCategoria])

    if (cargando){
        return (
            <p>Cargando...</p>
        )
    } else 
    {
        return (
                <>
                {/* {greeting} */}
                {/* <ItemCount stock = "5" initial = "1" onAdd = {onAdd}  /> */}
                
                <ItemList items = {ProductsDatabase} />
                
                
                </>
                
        )
    }
}

export default ItemListContainer




