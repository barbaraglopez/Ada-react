import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from '../context/useContext'
import { getAllProducts } from './services/products'
import Navbar from '../components/Navbar/Navbar';


export const Home = () => {
  const { data, cart, setCart , total, setTotal} = useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seetError] = useState(false);
  //const { user } = useContext(UserContext);

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
    let match = cart.find((cartProduct) => cartProduct.name === product.name)
    if(match) {
      match.cantidad += 1
    }else{
      setCart([...cart, stagingProduct])
    }
} 

  return (
    <div>
      <Navbar />
      <h2>Home</h2>
      {error && <p>Error 404 not found</p>}
      {loading && <p>Loading</p>}
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.img} />
          <h1>{product.name}</h1>
          <p>{product.descripcion}</p>
          <p> $ {product.precio}</p>
          <button onClick={() => buyProduct(product)}>Comprar producto</button>
        </div>
      ))}
      {!products.length && !loading && <p>No hay productos</p>}
    </div>
  );
};
