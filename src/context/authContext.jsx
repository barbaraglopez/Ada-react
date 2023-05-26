import {createContext, useContext} from 'react'
/* import {GoogleAuthProvider, singInWithPopup} from 'firebase/auth'
import {auth} from '../firebase/config.js' */

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('there is nou auth provider')
    return context
}

/* const loginWhitGoogle = () => {
    const googleProvider = new GoogleAuthProvider
    return singInWithPopup(auth,googleProvider)
};

 */

export const AuthProvider = ({children})=>{
    const user = {
        login:true,
    }

/* const singUp = (email, password) =>{
    const auth = getAuth();
    //createUserWithEmailAndPassword(auth, email. password)
}     */

return (
  <authContext.Provider value={{user}}>
    {children}
  </authContext.Provider>
);
}