import {Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Carrito from "./components/Carrito"
const Main = () => {

  return (
    <main>
      <Routes>
        
        <Route path="/" element = {<ItemListContainer />} /> 
        <Route path="/item/:id" element ={<ItemDetailContainer/>}></Route>  
        <Route path="/category/:nombreCategoria" element = {<ItemListContainer />} /> 
        {/* <Route></Route> */}

        {/* <Route path="/carrito" element = {<Carrito></Carrito>}></Route> */}
      </Routes>

    </main>
  )
}

export default Main