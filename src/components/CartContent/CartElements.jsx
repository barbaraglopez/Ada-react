import { useContext } from "react";
import { AppContext } from "../../context/useContext";
import { useNavigate} from "react-router-dom";


export const CartElements = () => {
    const navigate = useNavigate();
    const { cart , setCart , total } = useContext(AppContext)

    //funcion eliminar compra
    const deleteProduct = (product)=>{
      setCart([]);
    }

    const navigateTo =(param)=>{
      navigate(param)
    }

    return (
      <div className="absolute inset-0 top-20 flex flex-col text-center bg-slate-50 text-black items-center shadow-lg rounded pt-6 mb-4">
        <h2 className="p-2 text-xl">Sus pedidos :</h2>
        <div className="bg-white shadow-xl rounded pt-6 mb-3 mt-4 p-5 w-80">
          {cart.map((product) => (
            <div
              key={product.id}
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              <h3 className="block text-gray-700 text-sm font-fold mb-2 name">
                {product.name}
              </h3>
              <p className="block text-gray-700 text-sm font-fold mb-2">
                {product.descripcion}
              </p>
              <p className="precio block text-gray-700 text-sm font-fold mb-2">
                Price : $ {product.precio}
              </p>
              <p className="block text-gray-700 text-sm font-fold mb-2">
                Amount : {product.cantidad}
              </p>
              <p className="block text-gray-700 text-sm font-fold mb-2">
                Total to pay ${product.precio * product.cantidad}
              </p>
            </div>
          ))}
          {!cart.length && <p>No hay pedido</p>}
          <button
            onClick={() => navigateTo("/home")}
            className="rounded p-2 text-sm text-white bg-gray-700 hover:bg-violet-700 font-bold mt-3"
          >
            Back home
          </button>
        </div>
        <div className="flex flex-col items-center p-6">
          <button
            className="bg-red-300 border border-red-400 text-red-700 hover:bg-red-700 hover:text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline cursor:auto; text-sm mt-2 mx-2 px-7"
            onClick={() => deleteProduct(product)}
          >
            Empty cart
          </button>
          <button
            onClick={() => navigateTo("/checkout")}
            className="bg-green-300 border border-green-400 text-green-700 hover:bg-green-700 hover:text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline cursor:auto; text-sm mt-2 px-8"
          >
            Checkout
          </button>
        </div>
      </div>
    );

}

