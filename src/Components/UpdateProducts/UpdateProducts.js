import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='d-flex justify-content-between container mt-5'>
            <div className='col-6'>
                <img className='w-50' src={product.img} alt="" />
            </div>
            <div className='col-6'>
                <h4>Name: {product.name}</h4>
                <p>Description: {product.description}</p>
                <h5>Price: {product.price}</h5>
                <h5>Suppllyer: {product.suppllyer}</h5>
                <h5>Quantity: {product.quantity}</h5>
            </div>
        </div>

    );
};

export default UpdateProducts;