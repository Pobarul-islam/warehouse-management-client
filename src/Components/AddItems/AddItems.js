import React, { useEffect, useState } from 'react';

const AddItems = () => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    return (
        <div>
            <h1>name: {product.name}</h1>
        </div>
    );
};

export default AddItems;