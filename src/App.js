import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import AuthContext from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

import { useEffect } from 'react';
import AddOffer from './components/AddOffer/AddOffer';

function App() {

  const [user, setUser] = useLocalStorage('user', null);

  useEffect(() => {
    
  }, []);

  return (
    <>
    <AuthContext.Provider value={{ user, setUser }}>
    <div className="App">
      <Header />

      <main>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/new-offer" element={<AddOffer />} />
           <Route path="*" element={<h1>404 NOT FOUND!</h1>} />
         </Routes>
      </main>

      <Footer />
    </div>
    </AuthContext.Provider>
    </>
  );
}

export default App;
