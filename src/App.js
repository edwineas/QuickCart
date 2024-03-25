import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopListBody from './pages/Second/ShopListBody';
import './App.css';
import Checkout from './pages/Third/Checkout';
import Cart from './components/Cart/Cart';
import Login from './pages/Login/Login';
import RegisterShop from './pages/Register/RegisterShop';
import CartBill from './pages/Confirmation/CartBill';
import Navbar from './components/Navbar/Navbar';
import { Feed } from './pages';
import { Footer } from './components';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/shop-list" element={<ShopListBody />} />
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
