import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import './App.css';
import Checkout from './pages/Third/Checkout';
import RegisterShop from './pages/Register/RegisterShop';
import CartBill from './pages/Confirmation/CartBill';
import { Feed, Login } from './pages';
import { Footer, Navbar, Cart } from './components';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registershop" element={<RegisterShop />} />
          <Route path="/cartbill" element={<CartBill />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
