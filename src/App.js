import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';

import CartPage from './pages/CartPage/CartPage';
import RegisterShop from './pages/Register/RegisterShop';
import { Navbar, Cart, Footer, Popup, UserSelector, ProtectedRoute, IndividualShops  } from './components';
import { Feed, Login, SearchPage, Thankyou, CartBill,RegisterCustomer,NewStock, Shopkeeper,Help} from './pages';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterCustomer/>;
}

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute><Feed /></ProtectedRoute>} /> */}
          <Route path="/" element={<Feed />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path='/popup' element={<Popup/>} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-select" element={<UserSelector />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registershop" element={<RegisterShop />} />
          <Route path="/registershopkeeper" element={<Shopkeeper />} />
          <Route path="/individual-shop" element={<IndividualShops />} />
          <Route path="/cartbill" element={<CartBill />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/registercustomer" element={<RegisterCustomer />} />
          <Route path="/newstock" element={<NewStock />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
