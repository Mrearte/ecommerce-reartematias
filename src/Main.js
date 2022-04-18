import ItemListContainer from "./components/ItemListContainer"

const Main = ({ children, nombre }) => {

  //console.log(props)
  //const {children,nombre} = props
  //const {children:children} = props
  //const children = props.children

  return (
    <main>
      bienvenido {nombre}
      {children}
      <br></br>
      <span className="material-icons">
        shopping_cart
      </span>
    </main>
  )
}

export default Main