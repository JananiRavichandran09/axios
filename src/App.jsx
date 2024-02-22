import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Products from './assets/components/Products';
import Edit from './assets/components/Edit';
import Create from './assets/components/Create';
import Footer from './assets/components/Footer';

const App = () => {
  const [id, setId] = useState(0)
  return (
    <div>
     
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products setId={setId} />} />
          <Route path='/edit/:id' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;