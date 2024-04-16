import { useState, useEffect } from 'react';
import axios from 'axios';

//List of products
export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/shops/products/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const products = data.map(product => ({
            src: product.image,
            name: product.name,
            id: product.id
          }));
          setProducts(products);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return products;
};

//List of shops
export const useShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/shops/list/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setShops(data);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return shops;
};

//Get the inventory of a shop
export const getInventory = async () => {
  const shopId = localStorage.getItem('shopId'); // Get the shopId from the local storage
  try {
    const response = await axios.get(`http://localhost:8000/shops/inventory/${shopId}/`);
    const inventoryList = response.data;
    return inventoryList;
  } catch (error) {
    console.error('Failed to fetch inventory:', error);
  }
};
