
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer" 
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer greeting = "Ropa Listado"/>
      <ItemDetailContainer />
      <Main >
      
      </Main>
      <Footer />
    </>
  )
}

export default App