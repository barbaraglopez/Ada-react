import { useContext } from "react";
//import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

//import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  //const { cart } = useContext(dataContext);
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
      </nav>
    </div>
  );
};

export default Navbar;
