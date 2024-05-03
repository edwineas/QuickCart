import React from 'react';
import { useLocation } from 'react-router-dom';
import './CartBill.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartBill = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const mappedShops = location.state.mappedShops;

    const handleClick = () => {
        navigate('/postorder')
    }

    return (
        <div className="bill-container">
            <div className="cart-head">
                <h1 className="cart-title"> OrderBill</h1>
            </div>
            {mappedShops.map((shop, index) => (
                <div className="item-container" key={index}>
                    <h2 className="store-name">{shop.shop_name}</h2>
                    {shop.products.map((product, index) => (
                        <div className="item-view" key={index}>
                            <p className="item-name">{product.product}</p>
                            <div className="itemaddprice">
                                <p className="quantity">{product.quantity}</p>
                                <p className="item-price">₹{product.price}</p>
                            </div>
                        </div>
                    ))}
                    <div className="shopbillitem">
                        <p className="bill-shop-total">Shop Price</p>
                        <p className="bill-shop-total">₹{shop.total_price}</p>
                    </div>
                </div>
            ))}
            <div className="bill-details-container">
                <div className="billitem">
                    <p className="bill-final-total">Total</p>
                    <p className="bill-final-total">₹{
                        mappedShops.reduce((total, shop) => total + Number(shop.total_price), 0)
                    }</p>
                </div>
            </div>
            <button className="continue-button" onClick={handleClick}>Continue</button>
        </div>
    );
}

export default CartBill;