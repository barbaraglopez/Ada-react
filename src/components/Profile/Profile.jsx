import {useState, useContext} from 'react'
import {useAuth, AppContext} from '../../context/useContext'
import Sidebar from '../Sidebar/Sidebar'
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';


const Profile =()=> {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

/*   //spinner pendiente
  if (loading) return <h1>loading</h1>; */

  return (
    <>
      <Navbar/>
      <div className='flex flex-col'>
        <Sidebar />
      </div>
      <div>
        <p>Welcome {user.email}!</p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Profile