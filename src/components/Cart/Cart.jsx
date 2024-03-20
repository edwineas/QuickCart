import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-div'>
        <ShoppingCartIcon 
            className='cart-icon'
            sx={{ fontSize: 40, color: '#435BDA' }
        }
        />
        <div className="cart-count-div">
            <p className='cart-count'>1</p>
        </div>
    </div>
  )
}

export default Cart
