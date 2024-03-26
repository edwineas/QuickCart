import React, { useState } from 'react';
import './NewStock.css';

const NewStock = () => {
  const [items, setItems] = useState([
    { name: 'Item 1', quantity: 0 },
    { name: 'Item 2', quantity: 0 },
    { name: 'Item 3', quantity: 0 },
    { name: 'Item 4', quantity: 0 },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem !== '') {
      setItems([...items, { name: newItem, quantity: 0 }]);
      setNewItem('');
    }
  };

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };

  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
    }
    setItems(newItems);
  };

  const handleConfirmChanges = () => {
    // Handle the confirmation logic here
    console.log('Changes confirmed');
  };

  return (
    <div className="newStock-container">
      <label htmlFor="search" className="newStock-searchLabel">Search Item:</label>
      <input
        id="search"
        type="text"
        placeholder="Search item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="newStock-searchInput"
      />
      <button onClick={handleAddItem} className="newStock-addButton">Add Item</button>
      <ul className="newStock-itemList">
        {items.map((item, index) => (
          <li key={index} className="newStock-item">
            <span className="newStock-itemName">{item.name}</span>
            <button onClick={() => handleDecrease(index)} className="newStock-decreaseButton">-</button>
            <span className="newStock-itemQuantity">{item.quantity}</span>
            <button onClick={() => handleIncrease(index)} className="newStock-increaseButton">+</button>
          </li>
        ))}
      </ul>
      <button onClick={handleConfirmChanges} className="newStock-confirmChangesButton">Confirm Changes</button>
    </div>
  );
};

export default NewStock;
