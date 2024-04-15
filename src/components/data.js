import { useState, useEffect } from 'react';

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
            name: product.name
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
