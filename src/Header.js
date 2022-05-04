import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"


const Header = () =>{
    return(
        <header id = "Header"> 
            <Link to="/">
                <img src="../imagenes/Logo-Villanas.png" alt="Logo-Villanas" id = "Logo-Villanas" />
            </Link>
            <h1>Villanas Showroom</h1>
            <NavBar/>

        </header>
    )
}

export default Header