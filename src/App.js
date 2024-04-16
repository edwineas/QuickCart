import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage/CartPage';
import RegisterShop from './pages/Register/RegisterShop';
import { CartProvider } from './components/CartContext';
import { Navbar, Cart, Footer, Popup, UserSelector, ProtectedRoute, Indi, CartItems } from './components';
import { Feed, Login, SearchPage, Thankyou, CartBill, RegisterCustomer, NewStock, Shopkeeper, Help, Order, PostOrder, OrderView, CartList ,OrderDetails, Inventory} from './pages';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterCustomer />;
}

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
            <Route path="/searchpage" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
            <Route path='/popup' element={<Popup />} />
            <Route path="/cart-page" element={<CartPage />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-select" element={<UserSelector />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registershop" element={<RegisterShop />} />
            <Route path="/registershopkeeper" element={<Shopkeeper />} />
            <Route path="/individual-shop" element={<Indi />} />
            <Route path="/cartbill" element={<CartBill />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/registercustomer" element={<RegisterCustomer />} />
            <Route path="/newstock" element={<NewStock />} />
            <Route path="/help" element={<Help />} />
            <Route path="/order" element={<Order />} />
            <Route path="/postorder" element={<PostOrder />} />
            <Route path="/order-view" element={<OrderView />} />
            <Route path="/cartitems" element={<CartItems />} />
            <Route path="/cartlist" element={<CartList />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orderdetails" element={<OrderDetails />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
