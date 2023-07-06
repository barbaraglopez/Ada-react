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
      <div className="absolute inset-0 top-20 flex flex-col text-center p-10 bg-slate-300  text-black items-center shadow-lg">
        <h2 className="p-2 text-xl">Sus pedidos :</h2>
        <div className="bg-slate-100 text-black p-7 rounded text-center text-sm w-min">
          {cart.map((product) => (
            <div key={product.id} className="">
              <h3 className="name p-1">{product.name}</h3>
              <p className="descripcion p-1">{product.descripcion}</p>
              <p className="precio">Precio : $ {product.precio}</p>
              <p className="p-1">Cantidad : {product.cantidad}</p>
              <p className="p-3 ">
                Total a pagar ${product.precio * product.cantidad}
              </p>
            </div>
          ))}
          {!cart.length && <p>No hay pedido</p>}
          <Link to={"/Home"} className="">Vuelva al inicio</Link>
        </div>
        <div className="flex flex-col items-center p-6">
          <button
            className="bg-gray-100 p-1 m-1 border-red-400 border rounded px-2 cursor-pointer text-red-700 w-32 hover:bg-red-300 hover:text-white"
            onClick={() => deleteProduct(product)}
          >
            Vaciar carrito
          </button>
          <Link
            to={"/checkout"}
            className="bg-gray-100  p-1 m-1 border-green-400 border rounded px-2 cursor-pointer text-green-600 w-34 hover:bg-green-500 hover:text-white"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    );

}

