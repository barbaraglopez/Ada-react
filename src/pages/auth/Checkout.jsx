import { createOrder } from '../../pages/services/order'
import { useState } from 'react';
import { useContext } from "react";
import { AppContext } from "../../context/useContext"
import { Link, useNavigate} from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

export const Checkout = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

    const { cart, setCart } = useContext(AppContext);
    console.log(cart)

    const [values, setValues] = useState({
        name: "",
        email: "",
        direccion: "",
    });

    /* const [error, setError] = useState(false); */

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.direccion]: e.target.value,
        });
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();
        setErr('')
        const newOrder =  {
        Cliente : values,
        Productos:cart,
        Total:1
        }
  
        try {
            const order = await createOrder(newOrder)
            setMessage('Orden enviada con exito!')
        } catch (error) {
            setErr(true)
            console.log('hubo un error',error)
        }
    };

    const navigateTo = (param) => {
      navigate(param);
    };


    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="absolute inset-0 top-20 flex flex-col text-center bg-slate-50 text-black items-center shadow-lg rounded pt-6 mb-4">
          <h2 className="text-lg p-2">
            Finalize su compra ingrese sus datos :
          </h2>

          <form
            onSubmit={onSubmit}
            className="flex flex-col text-center bg-white shadow-lg rounded pt-6 mb-4 p-5"
          >
            <label className="block text-gray-700 text-sm font-fold mb-2 mt-2">
              Nombre :
            </label>
            <input
              className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Coloca tu nombre aqui"
            />
            <label className="block text-gray-700 text-sm font-fold mb-2 mt-2">
              Mail :
            </label>
            <input
              className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Coloca tu email aqui"
            />
            <label className="block text-gray-700 text-sm font-fold mb-2 mt-2">
              Direccion :
            </label>
            <input
              className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              type="text"
              name="direccion"
              value={values.direccion}
              onChange={handleChange}
              placeholder="Coloca tu direccion aqui"
            />
            <button
              className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor:auto; text-sm mt-2"
              type="submit"
            >
              Finalizar pedido
            </button>
            {message.length != "" ? <p>{message}</p> : <p></p>}
            <button
              onClick={() => navigateTo("/home")}
              className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor:auto; text-sm mt-2"
            >
              Vuelva al inicio
            </button>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}
