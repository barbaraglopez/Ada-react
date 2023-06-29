import { useState} from "react";
import { Link} from "react-router-dom";
import {useAuth} from '../../context/useContext'

//import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const [error, setError] = useState(false);
  const {logOut ,} = useAuth()

  const handleLogOut= async ()=>{
    try {
      await logOut();  
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">Ada Shop</h1>
        </Link>
        {/* <Link to={"/"}>
          <p className="navbar-logo">Inicio</p>
        </Link>
        <Link to={"/Productos mas vendidos"}>
          <p className="navbar-logo">Productos mas vendidos</p>
        </Link> */}
        <Link className="seeCarrito" to={"/cart"}>
          🛒
        </Link>
        <button onClick={handleLogOut}>Cerrar sesion</button> 
      </nav>
    </div>
  );
};

export default Navbar;
