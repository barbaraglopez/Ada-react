/* import {useContext} from 'react'
import {useAuth} from '../context/authContext' */
//import {db} from '../firebase/config'

import { useEffect } from "react";
import {getAllProducts} from './services/products'

export const Home = () => {
  
      useEffect(()=>{
        const getData = async () =>{
          await getAllProducts();
      }

        getData();
        //getdata
      },[])

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
