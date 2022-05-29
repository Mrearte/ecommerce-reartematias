import CartWidget from "./CartWidget"
import {Link,NavLink} from "react-router-dom"


const NavBar = (props) => {
  //console.table(props.link)
  //console.log(props.id)
  //console.log(props.nombre)
  //console.log(props.footer)
  if(props.footer){
    return (
      <nav className="nav">
        <CartWidget/>
        <Link to="/Login" className="nav__link">Login</Link>
        <Link to="Registrarte" className="nav__link">Registrarte</Link>
      </nav>
    )
  }else{
    return(
      <nav className="nav">
        <CartWidget/>
        <Link to="/category/Cesto" className="nav__link">Cesto</Link>
        <Link to="/category/Almohadon" className="nav__link">Almohadon</Link>
      </nav>
    )
  }
}

export default NavBar