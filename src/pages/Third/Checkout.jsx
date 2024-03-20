import React from "react";
import Priority from '../../components/PrioritySelector/Priority';
import Navbar from "../../components/Navbar/Navbar";
import Items from "../../components/CheckOutItem/CheckoutItem"
const Checkout = () => {
    return (
    <>    
    <Navbar />
    <Priority />
    <Items />
    </>
    );
};

export default Checkout;