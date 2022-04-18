
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer/>
      <Main nombre="Pedro">
      </Main>
      <Footer />
    </>
  )
}

export default App