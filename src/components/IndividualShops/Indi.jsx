import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { star_rating as str } from '../../images';
import './Indi.css';
import Grocery from './Grocery';
import { shopInventory } from "../../components/data";
import LoadingScreen from '../LoadingScreen/LoadingScreen';


export default function Indi() {
  const location = useLocation();
  const [sInventory, setSInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { image, name, sid, address, rating, openTime, closeTime, contact } = location.state || {};
  const shopId = sid;

  useEffect(() => {
    if (!shopId) return; // Check if shopId is defined
    const fetchInventory = async () => {
      setLoading(true);
      try {
        const inventory = await shopInventory(shopId);
        setSInventory(inventory);
      } catch (error) {
        console.error('Error fetching shop inventory:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, [shopId, location.state]);
  console.log(sInventory);
  return (
    <>
      {loading && <LoadingScreen />}
      <div className='outer-container'>
        <div className='shopName'><h1>{name}</h1></div>
        <div className='itemsRow'>
          <div className='shopDetails'>
            <div className='shopAddress'>{address}</div>
            <div className='shopContact'><img src={str} alt="rating" id="starLogo" />{rating}</div>
            <div className='shopContact'><span>Contact: </span> {contact}</div>
            <div className='shopContact'><span>Opening time: </span> {openTime}</div>
            <div className='shopContact'><span>Closing time: </span>{closeTime}</div>
          </div>
          <div className='shopImage'>
            <img src={image} alt="image" className='iImg' />
          </div>
        </div>
      </div>
      <div className="shops-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price (Rs. per kg or unit)</th>
            </tr>
          </thead>
          <tbody>
            {sInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};
