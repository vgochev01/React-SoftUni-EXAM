import { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddOffer from './components/AddOffer/';
import JobsCatalog from './components/JobsCatalog/';
import Profile from './components/Profile/';

import { AuthProvider } from './contexts/AuthContext';


import './App.css';
import EditOffer from './components/EditOffer/EditOffer';

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <>
    <AuthProvider>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobs/*" element={<JobsCatalog />} />
            <Route path="/jobs/:id/edit" element={<EditOffer />} />
            <Route path="/new-offer" element={<AddOffer />} />
            <Route path="*" element={<h1>404 NOT FOUND!</h1>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
    </>
  );
}

export default App;
