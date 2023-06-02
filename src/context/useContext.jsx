import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/config";
//import axios from 'axios';
import { getAllProducts } from "../pages/services/products";

export const AppContext = createContext();

//Funcion para saber si el usuario esta logueado o no
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(uid);
            } else {
                setUser(null)
            }
        });
    }, []);

    //Funcion para mostrar mis productos
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, seetError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const dataProducts = await getAllProducts();
                setData(dataProducts);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                seetError(true);
            }  finally {
                setLoading(false)
            }
        };
        getData();
    }, []);

//Funcion para mi carrito de compras
const [cart ,setCart] = useState([])
const [total, setTotal] = useState();

    return (
        <AppContext.Provider value={{ user , data, cart, setCart, total, setTotal }}>{children}</AppContext.Provider>
    );
};
