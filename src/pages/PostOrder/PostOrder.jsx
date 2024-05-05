import React, { useState, useEffect } from 'react';
import './PostOrder.css'; // Import your custom CSS file to make the page attractive
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

// Create a functional component named PostOrder
const PostOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = location.state;
  const [orders, setOrders] = useState([]);
  const handleClick = () => {
    navigate('/thankyou')
  }



  useEffect(() => {
    const postOrder = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DJANGO_URL}/orders/postorder/${orderId}/`);
        console.log('Order posted:', response.data);
        setOrders(response.data.shops);
      } catch (error) {
        console.error('Error posting order:', error);
      }
    };
    console.log('order', orders)
    postOrder();
  }, [orderId]);

  return (
    <div className="postorder">
      <h1>Shop Proximity</h1>
      {orders.map((shop, index) => (
        <div key={index} className="shop-card">
          <h3>{shop.shop_name}</h3>
          {shop.products.map((item, index) => (
            <div key={index} className="item">
              <span>{item.product_name}</span>
              <span>{item.product_quantity}</span>
              <span>{item.product_price}</span>
            </div>
          ))}
          <div className='totaldiv'><p className="total">Total: {shop.shop_price}</p></div>
          <button className="status" onClick={handleClick}>{shop.packet_picked ? 'Picked' : 'Not Picked'}</button>
        </div>
      ))}
    </div>
  );
}

export default PostOrder;
