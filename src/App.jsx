import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Home} from './pages/Home'
import {Sing} from './pages/auth/Sing';
import {CartContent} from "./components/CartContent/CartContent";
import {AppProvider} from './context/useContext'



function App() {

  return (
    <main>
      <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sing" element={<Sing />} />
            <Route path="/cart" element={<CartContent />}/>
          </Routes>
      </AppProvider>
    </main>
  );
}

export default App
