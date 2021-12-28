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
import EditOffer from './components/EditOffer/';
import About from './components/About/';
import NotFound from './components/NotFound';

import { AuthProvider } from './contexts/AuthContext';


import './App.css';

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
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
    </>
  );
}

export default App;
