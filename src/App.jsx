import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Home} from './pages/Home'
import {Sing} from './pages/auth/Sing';
import {CartContent} from "./components/CartContent/CartContent";
import {AppProvider} from './context/useContext'
import {Checkout} from './pages/auth/Checkout'
import {Loguin} from './pages/auth/Loguin'
import { ProtectedRoute } from './components/protectedRoutes';
import Profile from "./components/Profile/Profile";




function App() {

  return (
    <main className="text-center">
      <AppProvider>
        <Routes>
          <Route
            path="/home"
            element={
                <Home />}
            action={Sing}
          />
          <Route path="/loguin" element={<Loguin />} action={Sing} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
            action={Sing}
          />
          <Route path="/" element={<Sing />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AppProvider>
    </main>
  );
}

export default App
