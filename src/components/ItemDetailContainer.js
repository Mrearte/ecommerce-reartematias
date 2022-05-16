import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import Items from "./Items"
 import { db } from "../firebase"

 import { collection, getDoc, doc, addDoc, getDocs , query} from "firebase/firestore"

const ItemDetailContainer = ({greeting})=>{
    const[producto,setProducto]=useState ({})
    const[cargando,setcargando] = useState([true])
    const {id} = useParams()

    useEffect( () => {
        


        const Collectionprod = collection(db,"Productos")


        const consulta = getDocs(Collectionprod)
        consulta
        .then ((resultado)=>{
            // console.log(resultado.docs)
            const producto = resultado.docs.map(doc=>{
                const productwId = {
                    ...doc.data(),
                    id: doc.id
                }
            return productwId
            })

            setProducto(producto)
            const resultadoFiltro = producto.filter((filtroProducto)=>{            
                return filtroProducto.id == id
            })[0]
            setProducto(resultadoFiltro)
            setcargando(false)
        })




        .catch (()=>{

        })
        .finally  (()=>{})


   
        
        
        const pedido = new Promise((res) =>{
            setTimeout(() => {
                res(producto)
            },2000)
            
        }) 
        pedido
        .then(()=>{
            setcargando(false)
            // setProducto(producto)
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
                <ItemDetail producto={producto}
                    />
                    
                </>
                
        )
    }

}
export default ItemDetailContainer




