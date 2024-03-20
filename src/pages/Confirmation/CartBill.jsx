import React from 'react';
import './CartBill.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartBill = () => {
    return (
        <div className="bill-container">
            <div className="cart-head">
                <h1 className="cart-title"><ShoppingCartIcon 
                    color="primary"
                /> Cart</h1>
                <p className="cart-subtitle">2 Items</p>
            </div>
            <div className="item-container">
                <h2 className="store-name">from Grocery A</h2>
                <div className="item-view">
                    <p className="item-name">Big onion</p>
                    <div className="itemaddprice">
                        <div className="quantity-selector">
                            <RemoveIcon />
                            <p className="quantity">1</p>
                            <AddIcon />
                        </div>
                        <p className="item-price">₹55</p>
                    </div>
                </div>
            </div>
            <div className="bill-details-container">
                <h2 className="bill-details-title">Bill details</h2>
                <div className="billitem">
                    <p className="bill-item-total">Item Total</p>
                    <p className="bill-item-total-price">₹799.00</p>
                </div>
                <div className="billitem">
                    <p className="bill-delivery-fee">Delivery Fee | 12.9 kms</p>
                    <p className="bill-delivery-fee-price">₹131.00</p>
                </div>
                <div className="billitem">
                    <p className="bill-taxes-charges">Taxes and Charges i</p>
                    <p className="bill-taxes-charges-price">₹2.0</p>
                </div>
                <div className="billitem">
                    <p className="bill-total">Total</p>
                    <p className="bill-total-price">₹11,400.00</p>
                </div>
                <div className="billitem">
                    <p className="bill-discount">Discount</p>
                    <p className="bill-discount-price">₹4000.00</p>
                </div>
                <div className="billitem">
                    <p className="bill-final-total">Total</p>
                    <p className="bill-final-total-price">₹7,400.00</p>
                </div>

            </div>
            <button className="continue-button">Continue</button>
        </div>
    );
}

export default CartBill;
