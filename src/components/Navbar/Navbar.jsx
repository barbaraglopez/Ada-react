import { useState} from "react";
import { Link} from "react-router-dom";

//import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <nav className="navbar text-center bg-black flex justify-around h-20">
        <Link to={"/"}>
          <h1 className="navbar-logo text-center text-white">Ada Shop</h1>
        </Link>
        {/* <Link to={"/"}>
          <p className="navbar-logo">Inicio</p>
        </Link>
        <Link to={"/Productos mas vendidos"}>
          <p className="navbar-logo">Productos mas vendidos</p>
        </Link> */}
        <Link className="seeCarrito text-xl" to={"/cart"}>
          🛒
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
