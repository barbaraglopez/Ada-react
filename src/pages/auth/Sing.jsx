import { useState } from "react";
import {registerUser} from '../services/auth'

export const Sing = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

    const onSubmit = async (e) => {
      e.preventDefault();
      const user = await registerUser(values);
      console.log(user);
    };
    

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          name="email"
          placeholder="Coloca tu email aqui"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Coloca tu contrasenia aqui"
        />
      </div>
      <button type="submit">Crear Cuenta</button>
      <button>Login wih Google</button>
    </form>
  );
};
