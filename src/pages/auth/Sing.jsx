import { useState } from "react";
import { Link, redirect} from "react-router-dom";
import { registerUser, loguinWithEmail } from "../services/auth";

export const Sing = () => {
  const [redirect, setRedirect] = useState(0)

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
    const user = await registerUser(values);
    if (user) {
      setRedirect(1)
    }else{
      setRedirect(2)
    };
};


return (
  <>
    <form onSubmit={goHome}>
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
      <button type="submit">Create account</button>
      <Link to={"/SingIn"}>Login</Link>
    </form>
    {redirect == 1 ? (
      <Link to={"/Home"}>
        Datos correctos, haga click aqui y navegue en nuestra home
      </Link>
    ) : redirect == 2 ?(
      <p>datos incorrectos</p>
    ) : (<p>ingresa tus datos</p>)}
  </>
);
};
