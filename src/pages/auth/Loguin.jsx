import { useState } from "react";
import {loguinWithEmail} from '../../pages/services/auth'

export const Loguin = () => {
  const [redirect, setRedirect] = useState(0);

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

  const goHome = async (e) => {
    e.preventDefault();
      const user = await loguinWithEmail(values);
      console.log(user);  
      if (user) {
        setRedirect(1);
      } else {
        setRedirect(2);
      }
};
  

  return (
    <>
      <form onSubmit={goHome}>
        <div>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Coloca tu email aqui"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="Coloca tu contrasenia aqui"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Ingresa</button>
      </form>
      {redirect == 1 ? (
        <Link to={"/Home"}>
          Datos correctos, haga click aqui y navegue en nuestra home
        </Link>
      ) : redirect == 2 ? (
        <p>datos incorrectos</p>
      ) : (
        <p>ingresa tus datos</p>
      )}
    </>
  );
};
