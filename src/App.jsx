import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Pastries from './pages/Pastries';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Toast from './components/Toast';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/cakes" element={<Cakes showToast={showToast} />} />
          <Route path="/pastries" element={<Pastries showToast={showToast} />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout showToast={showToast} />} />
          <Route path="/login" element={<Login showToast={showToast} />} />
          <Route path="/register" element={<Register showToast={showToast} />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Dynamic Toast Alert System */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
}

export default App;
