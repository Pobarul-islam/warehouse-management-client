import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateProducts = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div>




            <div className='d-flex col-12 justify-content-between container mt-5'>
                <div className=''>
                    <img className='w-50 img-fluid' src={product.img} alt="" />
                </div>
                <div className=''>
                    <h3>Name: {product.name}</h3>
                    <p>Description: {product.description}</p>
                    <p>Suppllyer: {product.suppllyer}</p>

                    <h5>Price: {product.price}</h5>
                    <h5>Quantity: {product.quantity}</h5> <br /> <br />
                    <form className="add-quantity">
                        <input name='quantity' type="number" placeholder='Add Quantity' required />

                        <button type='submit' className='btn btn-primary'>ADD</button>

                    </form>

                    <button className='btn btn-primary'>Delever</button>
                    <div className='w-50 mx-auto'>
                        <Link to='/manageinventory' className='btn btn-success'>Manage Inventory</Link>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default UpdateProducts;







