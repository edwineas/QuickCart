import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Height } from '@mui/icons-material';

const Cart = () => {
  return (
    <div className='cart-div'>
        <ShoppingCartIcon className='cart-icon'/>
        <p className='cart-count'>1</p>
    </div>
  )
}

export default Cart
