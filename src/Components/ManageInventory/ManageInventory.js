import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='mt-5'>
            <h2>This is Manage Inventory Page {products.length}</h2>
        </div>
    );
};

export default ManageInventory;