import { createOrder } from '../../pages/services/order'
import { useState } from 'react';
import { useContext } from "react";
import { AppContext } from "../../context/useContext"
import { Link } from "react-router-dom";

export const Checkout = () => {

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
        try {
            const order = await createOrder(values.name, values.email, values.direccion , cart.cantidad, cart.id, cart.nombre, cart.precio);
            console.log(order);
        } catch (error) {
            console.log(' hubo un error')
        }
    };
    return (
      <form onSubmit={onSubmit}>
        <h2>Finalize su compra ingrese sus datos</h2>
        <label>Nombre : </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Coloca tu nombre aqui"
        />
        <label>Mail : </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Coloca tu email aqui"
        />
        <label>Direccion : </label>
        <input
          type="text"
          name="direccion"
          value={values.direccion}
          onChange={handleChange}
          placeholder="Coloca tu direccion aqui"
        />
        <button type="submit">Finalizar pedido</button>
        <Link to={"/"}>Vuelva al inicio y compre!</Link>
      </form>
    );
}
