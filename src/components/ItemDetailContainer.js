import { useEffect, useState } from "react"
// import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import Items from "./Items"
 
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


const ItemDetailContainer = ({greeting})=>{
    const[producto,setProducto]=useState ({})
    const[cargando,setcargando] = useState([true])

    useEffect( () => {
        const pedido = new Promise((res) =>{
            setTimeout(() => {
                res(ProductsDatabase)
            },2000)
            
        }) 
        pedido
        .then(()=>{
            setcargando(false)
            setProducto(ProductsDatabase)
        })
    },[])

    if (cargando){
        return (
            <p>Cargando...</p>
        )
    } else 
    {
        return (
                <>
                {/* <ItemDetail items = {ProductsDatabase} /> */}
                    <ItemDetail key={ProductsDatabase[0].id}
                    description={ProductsDatabase[0].description} />
                    
                </>
                
        )
    }
}

export default ItemDetailContainer




