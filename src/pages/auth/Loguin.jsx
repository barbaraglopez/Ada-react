import { useState } from "react";
import { useAuth } from "../../context/useContext";
import { useNavigate } from "react-router-dom";


export const Loguin = () => {
   const [error, setError] = useState(false);
   const navigate = useNavigate();
  const { loguinUser } = useAuth();

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

  const loguin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loguinUser(values.email, values.password);
      navigate("/Home");
    } catch (error) {
      setError(error);
    }
  };


  return (
    <>
      <div>{error && <p> Ingrese datos validos</p>}</div>
      <form onSubmit={loguin}>
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
        <button>Loguin</button>
      </form>
    </>
  );
};
