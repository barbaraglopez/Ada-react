import {useState, useContext} from 'react'
import {useAuth, AppContext} from '../../context/useContext'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import {FaUserCircle} from "react-icons/fa";


const Profile =()=> {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

/*   //spinner pendiente
  if (loading) return <h1>loading</h1>; */

  const navigateTo = (param) => {
    navigate(param);
  };

  return (
    <div>
      <Navbar />
      <div className="absolute inset-0 top-20 flex flex-col text-center bg-slate-50 text-black items-center shadow-lg rounded pt-6 mb-4">
        <div className="bg-white flex items-center flex-col text-center shadow-xl rounded pt-6 mb-3 mt-4 p-5 w-80 ">
          <FaUserCircle className="mr-2 text-xl" />
          <p className="p-2">Welcome {user.displayName}!</p>
          <p>Welcome {user.email}</p>
          <div className="p-2">
            <p> User creation date :</p>
            <p>{user.metadata.creationTime}</p>
            <p> Last time online:</p>
            <p>{user.metadata.lastSignInTime}</p>
            <p>Registered mail:</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div>
          <div className="bg-white flex items-center flex-col text-center shadow-xl rounded pt-6 mb-3 mt-4 p-5 w-80 ">
            Do you have products in the cart?
            <button
              onClick={() => navigateTo("/cart")}
              className="rounded p-2 text-sm text-white bg-violet-500 hover:bg-violet-700 font-bold mt-2"
            >
              See my products
            </button>
          </div>
          <div className="bg-white flex items-center flex-col text-center shadow-xl rounded pt-6 mb-3 mt-4 p-5 w-80 ">
            <button
              onClick={() => navigateTo("/home")}
              className="rounded p-2 text-sm text-white bg-violet-500 hover:bg-violet-700 font-bold"
            >
              Vuelva al inicio
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile