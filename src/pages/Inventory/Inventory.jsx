import React, { useEffect, useState } from 'react';
import { getInventory } from "../../components/data"; 
import { Table } from '../../components';
import './Inventory.css';
import Edit from '@material-ui/icons/Edit';

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const inventoryy = await getInventory();
      setInventoryList(inventoryy);
    };

    fetchInventory();
  }, []);

  return (
    <div className='Inventorydiv'>
      <h1 className='InventH1'>Inventory</h1>
      <Table
        titles={['Item Name', 'Quantity', 'Price']} // Adjust these titles to match your data
        keys={['product_name', 'quantity', 'price']} // Adjust these keys to match your data
        data={inventoryList}
        showAction={true}
        actionTitle='Edit'
        buttonLabel={<Edit style={{ fontSize: 15 }} />}
      />
    </div>
  );
};

export default Inventory;