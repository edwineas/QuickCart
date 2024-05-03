import React, { useState, useEffect } from "react";
import axios from 'axios';
import Priority from '../../components/PrioritySelector/Priority';
import CheckoutItem from "../../components/CheckOutItem/CheckoutItem";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen"; // Import the LoadingScreen component
import './CartPage.css'
import { useNavigate, useLocation } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cartbill')
    }
    const location = useLocation();
    const cart = location.state.cart;

    const shops = [
        { name: "Elite Supermarket", distance: 5, availability: 10, price: 90 },
        { name: "Super Market", distance: 3, availability: 8, price: 76 },
    ];

    const [selectedPriority, setSelectedPriority] = useState("Distance");
    const [mappedShops, setMappedShops] = useState([]);
    const [userLocation, setUserLocation] = useState({});
    const [loading, setLoading] = useState(true); // Add a loading state

    const handlePriorityChange = (priority) => {
        setSelectedPriority(priority);
    };

    // useEffect(() => {
    //     let sortedShops = [...shops];
    //     if (selectedPriority === "Distance") {
    //         sortedShops.sort((a, b) => a.distance - b.distance);
    //     } else if (selectedPriority === "Availability") {
    //         sortedShops.sort((a, b) => b.availability - a.availability);
    //     } else if (selectedPriority === "Price") {
    //         sortedShops.sort((a, b) => a.price - b.price);
    //     }

    //     let mapped = sortedShops.map(shop => {
    //         let items = cart.map(item => ({ ...item, shop: shop.name }));
    //         return { ...shop, items };
    //     });

    //     if (JSON.stringify(mapped) !== JSON.stringify(mappedShops)) {
    //         setMappedShops(mapped);
    //     }
    // }, [selectedPriority, cart, shops]);

    useEffect(() => {
        const getGeoLocation = async () => {
            try {
                const res = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_MAPS_API_KEY}`);
                const { lat, lng } = res.data.location;
                setUserLocation({ lat, lng });

                const orderRes = await axios.post(`${process.env.REACT_APP_DJANGO_URL}/orders/mapping/`, {
                    location: { lat, lng },
                    cartItems: cart
                });

                setMappedShops(orderRes.data);

                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        getGeoLocation();
    }, []);

    return (
        <div>
            {loading ? <LoadingScreen /> : (
                <>
                    <Priority onPriorityChange={handlePriorityChange} />
                    {mappedShops.map((shop, index) => (
                        <CheckoutItem
                            key={index}
                            shop={shop} // Pass the entire shop object as a prop
                        />
                    ))}
                    <div className="cbtn"><button id="Continue" onClick={handleClick}>Continue</button></div>
                </>
            )}
        </div>
    );
};

export default CartPage;