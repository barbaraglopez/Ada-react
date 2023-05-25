import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
/* import {Login} from './pages/auth/Login' */
import {Sing} from './pages/auth/Sing';
import {User} from './pages/User';


function App() {
  return (
    <main>
      <h1>Firebase</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/sing" element={<Sing />}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
    </main>
  );
}

export default App
