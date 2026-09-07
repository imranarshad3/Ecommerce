import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/productpage' element={<ProductPage />} />
      <Route path='/productdetails' element= {<ProductDetails />} />
    </Routes>
  );
}

export default App;