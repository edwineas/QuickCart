import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    const navigateToCart = () => {
        navigate('/cartitems');
    }
    return (

        <div className="bottomCart">
            <div className='cart-div' onClick={navigateToCart}>
                <ShoppingCartIcon
                    className='cart-icon'
                    sx={{ fontSize: 40, color: '#435BDA' }
                    }
                />
                <div className="cart-count-div">
                    <p className='cart-count'>0</p>
                </div>
            </div>
        </div>

    )
}


export default Cart
