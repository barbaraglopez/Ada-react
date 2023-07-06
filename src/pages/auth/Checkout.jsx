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
            const order = await createOrder(newOrder);
            setMessage('Orden enviada con exito!')
        } catch (error) {
            setErr(true)
            console.log('hubo un error',error)
        }
    };

    const backHome =()=>{
      <Link to={"/"}>Vuelva al inicio y compre!</Link>;
    }

    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="p-5 flex items-center m-4 rounded flex-col text-center bg-slate-300 text-black">
          <h2 className="text-lg p-2">
            Finalize su compra ingrese sus datos :
          </h2>
          
          <form onSubmit={onSubmit} className="flex flex-col text-center ">
            <label className="p-1">Nombre : </label>
            <input
              className="p-1 rounded text-center"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Coloca tu nombre aqui"
            />
            <label className="p-1">Mail : </label>
            <input
              className="p-1 rounded text-center"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Coloca tu email aqui"
            />
            <label className="p-1">Direccion : </label>
            <input 
              className="p-1 rounded text-center"
              type="text"
              name="direccion"
              value={values.direccion}
              onChange={handleChange}
              placeholder="Coloca tu direccion aqui"
            />
            <button
              className="bg-black rounded text-center m-2 p-2 text-white hover:bg-slate-700"
              onClick={backHome()}
              type="submit"
            >
              Finalizar pedido
            </button>
            {message.length != "" ? <p>{message}</p> : <p></p>}
            <Link
              to={"/Home"}
              className="bg-black rounded text-center p-2 text-white hover:bg-slate-700 w-22 "
            >
              Vuelva al inicio
            </Link>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}
