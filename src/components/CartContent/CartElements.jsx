import { useContext } from "react";
import { AppContext } from "../../context/useContext";
import { Link } from "react-router-dom";


export const CartElements = () => {
    const { cart , setCart , total } = useContext(AppContext)

    //funcion eliminar compra
    const deleteProduct = (product)=>{
      setCart([]);
    }

    return (
      <div>
        <h2>Sus pedidos :</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <h3 className="name">{product.name}</h3>
            <p className="descripcion">{product.descripcion}</p>
            <p className="precio">Precio : $ {product.precio}</p>
            <p>Cantidad : {product.cantidad}</p>
            <p>total a pagar ${product.precio * product.cantidad}</p>
            <button onClick={() => deleteProduct(product)}>
              Eliminar compra
            </button>
          </div>
        ))}
        {!cart.length && <p>No hay pedido</p>}
        <Link to={"/"}>Vuelva al inicio y compre!</Link>
        <div>
          <button onClick={() => deleteProduct(product)}>Vaciar carrito</button>
          <Link to={"/checkout"}>Finalizar compra</Link>
        </div>
      </div>
    );

}

