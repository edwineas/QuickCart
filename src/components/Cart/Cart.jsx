import React, { useContext } from 'react';
import { CartContext } from '../CartContext';// Make sure to adjust the path to match your file structure
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const navigateToCart = () => {
    navigate('/cartlist');
  }

  return (
    <div className="bottomCart">
      <div className='cart-div' onClick={navigateToCart}>
        <ShoppingCartIcon
          className='cart-icon'
          sx={{ fontSize: 40, color: '#435BDA' }}
        />
        <div className="cart-count-div">
          <p className='cart-count'>{cart.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart;