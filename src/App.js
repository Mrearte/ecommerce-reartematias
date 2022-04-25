
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer" 

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer greeting = "Ropa Listado"/>
      <Main >
      
      </Main>
      <Footer />
    </>
  )
}

export default App