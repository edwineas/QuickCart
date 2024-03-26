import React from "react";
import Priority from '../../components/PrioritySelector/Priority';
import CheckoutItem from "../../components/CheckOutItem/CheckoutItem";
import './CartPage.css'

const CartPage = () => {
    return (
    <div>
      
        <Priority />
        <CheckoutItem name={"Elite Supermarket"} number={"1."} itemName={"Carrot"} quantity={1} price={90} starRating={4.2} />
        <CheckoutItem name={"Super Market"} number={"1."} itemName={"Onion"} quantity={1} price={76} starRating={4.1} />
        <div className="cbtn"><button id="Continue">Continue</button></div>
    </div>
    );
};

export default CartPage;