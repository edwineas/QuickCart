import React, { useEffect, useState } from 'react';
import { getInventory } from "../../components/data";
import { Table } from '../../components';
import './Inventory.css';
import Edit from '@material-ui/icons/Edit';
import { EditPopup } from '../../components';
import axios from 'axios';



const Inventory = () => {
    const [inventoryList, setInventoryList] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        const fetchInventory = async () => {
            const inventoryy = await getInventory();
            setInventoryList(inventoryy);
        };

        fetchInventory();
    }, []);

    const handleEdit = (product) => {
        setEditProduct(product);
    };

    const handleSave = (updatedProduct) => {
        console.log(updatedProduct);
        axios.put(`http://localhost:8000/shops/inventupdate/${updatedProduct.id}/`, updatedProduct)
            .then(response => {
                // Update the local state with the updated product data
                setInventoryList(inventoryList.map(product =>
                    product.id === updatedProduct.id ? response.data : product
                ));
                // Close the edit popup
                setEditProduct(null);
            })
            .catch(error => {
                // Handle the error
                console.error('There was an error!', error);
            });
    };

    return (
        <div className='Inventorydiv'>
            <h1 className='InventH1'>Inventory</h1>
            <Table
                titles={['Item Name', 'Quantity', 'Price']}
                keys={['product_name', 'quantity', 'price']}
                data={inventoryList}
                showAction={true}
                actionTitle='Edit'
                buttonLabel={<Edit style={{ fontSize: 15 }} />}
                onButtonClick={handleEdit}
            />
            {editProduct && (
                <EditPopup
                    open={!!editProduct}
                    product={editProduct} // Make sure editProduct has a valid id
                    onClose={() => setEditProduct(null)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default Inventory;