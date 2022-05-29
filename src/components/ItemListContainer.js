import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { db } from "../firebase"
import { collection, getDoc, doc, addDoc, getDocs , query , where,getFirestore} from "firebase/firestore"




const ItemListContainer = ({greeting})=>{
    const[cargando,setcargando] = useState([])
    const [productos, setProductos]= useState([]) 
    const {nombreCategoria} = useParams()


    useEffect( () => {

        const Collectionprod = collection(db,"Productos")

        if(nombreCategoria == undefined){
            const  consulta = getDocs(Collectionprod)
            
            consulta
            .then ((resultado)=>{
                // console.log(resultado.docs)
                const productos = resultado.docs.map(doc=>{
                    const productwId = {
                        ...doc.data(),
                        id: doc.id
                    }
    
                    return productwId
                    // console.log(doc.id)
                    // console.log(doc.data())
                })
    
                setProductos(productos)
                // console.log(productos)
    
            })
    
            .catch (()=>{
    
            })
            .finally  (()=>{})
    
    


        } else 
        {
            const queryWhere = query(Collectionprod, where("category","==", nombreCategoria ))
            const consulta = getDocs(queryWhere)

            consulta
            .then ((resultado)=>{
                // console.log(resultado.docs)
                const productos = resultado.docs.map(doc=>{
                    const productwId = {
                        ...doc.data(),
                        id: doc.id
                    }
    
                    return productwId
                    // console.log(doc.id)
                    // console.log(doc.data())
                })
    
                setProductos(productos)
                // console.log(productos)
    
            })
    
            .catch (()=>{
    
            })
            .finally  (()=>{})
    
    
        }

        

        





        const pedido = new Promise((res) =>{
            setTimeout(() => {
                res(productos)
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
                
                <ItemList items = {productos} />
                
                
                </>
                
        )
    }
}

    export default ItemListContainer