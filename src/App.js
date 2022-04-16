
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {
  return (
    <>
      <Header/>
      <Main nombre="Pedro">
        <p>Hola Mundo</p>
        <p>Hola Mundo 2</p>
      </Main>
      <Footer />
    </>
  )
}

export default App