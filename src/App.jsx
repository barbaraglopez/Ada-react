import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
/* import {Login} from './pages/auth/Login' */
import {Sing} from './pages/auth/Sing';
import {User} from './pages/User';
import {AuthProvider} from './context/authContext'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';


function App() {

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log('ya estaba logueado')
        console.log(uid);
      } else {
        // User is signed out
        // ...
        console.log('no estaba logueado')
      }
    });
  },[])
  return (
    <main>
      <h1>Firebase</h1>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/sing" element={<Sing />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </AuthProvider>
    </main>
  );
}

export default App
