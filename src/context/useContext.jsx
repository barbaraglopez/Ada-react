import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/config";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(uid);
            } else {
                // console.log('no estaba logueado');
                setUser(null)
            }
        });
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
