import { useState ,useEffect, useContext } from "react";
import { AppContext, useAuth } from '../context/useContext'
import { getAllProducts } from './services/products'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'

export const Home = () => {
  const {user} = useAuth()
  const { cart, setCart } = useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seetError] = useState(false);
 

  useEffect(() => {
    const getData = async () => {
      try {
        const dataProducts = await getAllProducts();
        //const dataProducts = await getUserProducts(user);
        setProducts(dataProducts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        seetError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

const buyProduct =(product)=>{
    let stagingProduct = { ...product}
    stagingProduct.cantidad = 1
    let match = cart.find((cartProduct) => cartProduct.id === product.id)
    if(match) {
      match.cantidad += 1
    }else{
      setCart([...cart, stagingProduct])
    }
} 

//spinner pendiente
if(loading) return <h1>loading</h1>

  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className="">
          <Navbar />
          {error && <p>Error 404 not found</p>}
          {loading && <p>Loading</p>}
          <div className="grid grid-cols-4 grid-rows-1 mb-40 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:flex max-sm:flex-col max-sm:items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col items-center max-sm:w-full                        "
              >
                <a href="#" className="">
                  <img src={product.img} className="rounded-t-lg h-72 mt-4" />
                </a>
                <div className="p-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.descripcion}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Precio : ${product.precio}
                  </p>
                </div>
                <button
                  className="nline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3"
                  onClick={() => buyProduct(product)}
                >
                  Comprar producto
                </button>
              </div>
            ))}
          </div>
          {!products.length && !loading && <p>No hay productos</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};
