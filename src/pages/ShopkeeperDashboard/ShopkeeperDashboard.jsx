import React from 'react';
import './ShopkeeperDashboard.css';

const ShopkeeperDashboard = () => {
    const shop = {
        name: 'Fresh Choice',
        rating: '4.5',
        image: 'url-to-shop-image', // Add the URL to the shop image
        address: '123 Main St, Anytown',
        contact: '123-456-7890',
        email: 'info@freshchoice.com',
        operatingHours: '10:00 AM - 8:00 PM',
        description: 'A leading grocery store providing fresh and quality products.',
        todaysSales: '1000',
        todaysEarnings: '500',
        monthlySales: '20000',
        monthlyEarnings: '10000',
        inventory: 'List of items in stock',
    };

    return (
        <div className="dashboard">
            <div className="shop-header">
                <img src={shop.image} alt={shop.name} />
                <div className="overlay">
                    <h1>{shop.name}</h1>
                    <p>Rating: {shop.rating}</p>
                </div>
            </div>
            <div className="section">
                <h2>Contact Information</h2>
                <label>Address:</label>
                <p>{shop.address}</p>
                <label>Contact:</label>
                <p>{shop.contact}</p>
                <label>Email:</label>
                <p>{shop.email}</p>
            </div>
            <div className="section">
                <h2>Operating Hours</h2>
                <p>{shop.operatingHours}</p>
            </div>
            <div className="section">
                <h2>Today's Sales</h2>
                <div className="sales-info">
                    <label>Total Sales:</label>
                    <p>{shop.todaysSales}</p>
                </div>
                <div className="sales-info">
                    <label>Today's Earnings:</label>
                    <p>{shop.todaysEarnings}</p>
                </div>
                <button>View More Details</button>
            </div>
            <div className="section">
                <h2>Monthly Sales</h2>
                <div className="sales-info">
                    <label>Total Sales:</label>
                    <p>{shop.monthlySales}</p>
                </div>
                <div className="sales-info">
                    <label>Monthly Earnings:</label>
                    <p>{shop.monthlyEarnings}</p>
                </div>
                <button>View More Details</button>
            </div>
            <div className="section">
                <h2>Inventory</h2>
                <p>{shop.inventory}</p>
            </div>
        </div>
    );
};

export default ShopkeeperDashboard;