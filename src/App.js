
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer" 
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      {/* <ItemListContainer greeting = "Ropa Listado"/>
      <ItemDetailContainer /> */}
      <Main >
      
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App