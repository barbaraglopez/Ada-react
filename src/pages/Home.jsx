/* import {useContext} from 'react'
import {useAuth} from '../context/authContext' */
//import {db} from '../firebase/config'

import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
//import {getAllProducts} from './services/products'
import { getUserProducts } from "./services/products";
import {UserContext} from '../context/useContext';

// duncion para cerrar sesion import {singOut} from 'firebase/auth' singOut()

export const Home = () => {

      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, seetError] = useState(false);
      const { user } = useContext(UserContext);
  
      useEffect(()=>{
        const getData = async () =>{
          try {
            //const dataProducts = await getUserProducts(user);
            const dataProducts = await getUserProducts(user);
            setProducts(dataProducts);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            seetError(true)
          } finally {
            setLoading(false)
          }
          
      }
        getData();
      },[])

  return (
    <div>
      <h2>Home</h2>
      {error && <p>Error 404 not found</p>}
      {loading && <p>Loading</p>}
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.imagen}</div>
          <h1>{product.name}</h1>
          <p>{product.descripcion}</p>
          <p> $ {product.precio}</p>
        </div>
      ))}
      {!products.length && !loading && <p>No hay productos</p>}
    </div>
  );
};
