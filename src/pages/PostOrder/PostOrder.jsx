import React from 'react';
import './PostOrder.css'; // Import your custom CSS file to make the page attractive
import { useNavigate } from 'react-router-dom';
const PostOrder = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/thankyou')
  }
  // Sample data
  const orders = [
    { 
      name: 'Elite Supermarket', 
      rating: 4.7,
      items: [
        { name: 'Carrot', quantity: '2kg', price: '90' },
        { name: 'Onion', quantity: '2kg', price: '76' }
      ],
      total: '166',
      status: 'Packet received'
    },
    // Add more shops here...
  ];

  return (
    <div className="postorder">
      <h1>Shop Proximity</h1>
      {orders.map((shop, index) => (
        <div key={index} className="shop-card">
          <h3>{shop.name} ({shop.rating})</h3>
          {shop.items.map((item, index) => (
            <div key={index} className="item">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <p className="total">Total: {shop.total}</p>
          <button className="status" onClick={handleClick}>{shop.status}</button>
        </div>
      ))}
    </div>
  );
}

export default PostOrder;
