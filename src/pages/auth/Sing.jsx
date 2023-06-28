import { useState } from "react";
import { useNavigate} from "react-router-dom";
import {useAuth} from "../../context/useContext"

export const Sing = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { registerUser, loguinWithGoogle } = useAuth();


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
    setError('')
    try {
      await registerUser(values.email, values.password);
      navigate("/Home")
    } catch (error) {
      setError(true);
    }
  }

  const LoguinwhitAccount =()=>{
    navigate('/Loguin')
  }

  //funcion para acceder con cuenta de google
  const handleGoogleSingIn = async ()=>{
    await loguinWithGoogle()
    navigate('/Home')
  }



return (
  <>
    <div>{error && <p> Ingrese datos validos</p>}</div>
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
    </form>
    <button onClick={LoguinwhitAccount}>Do u already have a account? Click here and login</button>
    <button onClick={handleGoogleSingIn}>Loguin with google</button>
  </>
);
};
