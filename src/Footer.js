import NavBar from "./components/NavBar"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__titlo">E-Commerce</h1>
      <NavBar nombre="Pedro" apellido="Gomez" footer={false}/>
    </header>
  )
}

export default Header