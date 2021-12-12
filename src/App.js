import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="*" element={<h1>404 NOT FOUND!</h1>} />
         </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
