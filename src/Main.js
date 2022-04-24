const Main = ({ children, nombre }) => {

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