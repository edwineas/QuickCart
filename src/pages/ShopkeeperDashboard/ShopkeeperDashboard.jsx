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
        todaysMostSoldItems: [
            { name: 'Item 1', quantity: 100 },
            { name: 'Item 2', quantity: 80 },
            { name: 'Item 3', quantity: 60 },
        ],
    };

    return (
        <div className="dashboard">
            <div className="shop-header">
                <img className="shop-image" src={shop.image} alt={shop.name} />
                <div className="shop-overlay">
                    <h1 className="shop-name">{shop.name}</h1>
                    <p className="shop-rating">Rating: {shop.rating}</p>
                </div>
            </div>
            <div className="shop-section-sales">
                <div className="shop-section shop-section-contact">
                    <h2 className="section-title">Contact Information</h2>
                    <div className="section-line">
                        <label className="section-label">Address:</label>
                        <p className="section-content">{shop.address}</p>
                    </div>
                    <div className="section-line">
                        <label className="section-label">Contact:</label>
                        <p className="section-content">{shop.contact}</p>
                    </div>
                    <div className="section-line">
                        <label className="section-label">Email:</label>
                        <p className="section-content">{shop.email}</p>
                    </div>
                </div>
                <div className="shop-section opening-hours">
                    <h2 className="section-title">Operating Hours</h2>
                    <p className="section-content">{shop.operatingHours}</p>
                    <p className="section-content">Monday-Saturday</p>
                </div>
            </div>
            <div className="shop-section-sales">
                <div className="shop-section sales-box">
                    <h2 className="section-title">Today's Sales</h2>
                    <div className="sales-info">
                        <label className="section-label">Total Sales:</label>
                        <p className="section-content">{shop.todaysSales}</p>
                    </div>
                    <div className="sales-info">
                        <label className="section-label">Today's Earnings:</label>
                        <p className="section-content">{shop.todaysEarnings}</p>
                    </div>
                    <button>View More Details</button>
                </div>
                <div className="shop-section sales-box">
                    <h2 className="section-title">Monthly Sales</h2>
                    <div className="sales-info">
                        <label className="section-label">Total Sales:</label>
                        <p className="section-content">{shop.monthlySales}</p>
                    </div>
                    <div className="sales-info">
                        <label className="section-label">Monthly Earnings:</label>
                        <p className="section-content">{shop.monthlyEarnings}</p>
                    </div>
                    <button>View More Details</button>
                </div>
            </div> 
            <div className="most-sold-today">
                <div className="shop-section ">
                    <h2 className="section-title">Most Sold Items Today</h2>
                    <div className="sales-info">
                        <table className="section-content">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shop.todaysMostSoldItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopkeeperDashboard;