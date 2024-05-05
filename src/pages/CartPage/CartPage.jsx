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
        navigate('/cartbill', { state: { mappedShops: mappedShops } });
    }
    const location = useLocation();
    const cart = location.state.cart;


    const [selectedPriority, setSelectedPriority] = useState("Distance");
    const [mappedShops, setMappedShops] = useState([]);
    const [userLocation, setUserLocation] = useState({});
    const [loading, setLoading] = useState(true); // Add a loading state

    const handlePriorityChange = (priority) => {
        setSelectedPriority(priority);
    };


    useEffect(() => {
        const getGeoLocation = async () => {
            try {
                const res = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_MAPS_API_KEY}`);
                console.log("uses geolocation for location");
                const { lat, lng } = res.data.location;
                setUserLocation({ lat, lng });
                console.log("cart", cart);

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