import React, { useState, useEffect } from "react";
import Priority from '../../components/PrioritySelector/Priority';
import CheckoutItem from "../../components/CheckOutItem/CheckoutItem";
import './CartPage.css'
import { useNavigate, useLocation } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cartbill')
    }
    const location = useLocation();
    const cart = location.state.cart;

    // Dummy data for shops
    const shops = [
        { name: "Elite Supermarket", distance: 5, availability: 10, price: 90 },
        { name: "Super Market", distance: 3, availability: 8, price: 76 },
        // Add more shops as needed
    ];

    const [selectedPriority, setSelectedPriority] = useState("Distance");
    const [mappedShops, setMappedShops] = useState([]);

    const handlePriorityChange = (priority) => {
        setSelectedPriority(priority);
    };

    useEffect(() => {
        let sortedShops = [...shops];
        if (selectedPriority === "Distance") {
            sortedShops.sort((a, b) => a.distance - b.distance);
        } else if (selectedPriority === "Availability") {
            sortedShops.sort((a, b) => b.availability - a.availability);
        } else if (selectedPriority === "Price") {
            sortedShops.sort((a, b) => a.price - b.price);
        }

        // Map items to shops
        let mapped = sortedShops.map(shop => {
            let items = cart.map(item => ({ ...item, shop: shop.name }));
            return { ...shop, items };
        });

        // Only update state if mapped items are different from current state
        if (JSON.stringify(mapped) !== JSON.stringify(mappedShops)) {
            setMappedShops(mapped);
        }
    }, [selectedPriority, cart, shops]);

    return (
    <div>
        <Priority onPriorityChange={handlePriorityChange} />
        {mappedShops.map((shop, index) => (
            shop.items.map((item, itemIndex) => (
                <CheckoutItem 
                    key={itemIndex}
                    name={shop.name}
                    number={index + 1}
                    itemName={item.itemName}
                    quantity={item.quantity}
                    price={item.price}
                    starRating={item.starRating}
                />
            ))
        ))}
        <div className="cbtn"><button id="Continue" onClick={handleClick}>Continue</button></div>
    </div>
    );
};

export default CartPage;