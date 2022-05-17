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
            .then(data => setProduct(data));
    }, [])
    return (
        <div >
            <div className='d-flex justify-content-between container mt-5'>
                <div className='col-6'>
                    <img className='w-50' src={product.img} alt="" />
                </div>
                <div className='col-6'>
                    <h1>Name: {product.name}</h1>
                    <p>Description: {product.description}</p>
                    <h5>Suppllyer: {product.suppllyer}</h5>
                    <h5>Price: {product.price}</h5>
                    <h5>Quantity: {product.quantity}</h5> <br /> <br />
                    <InputGroup className="mb-3 w-75 ms">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='btn-primary text-white' variant="outline-secondary" id="button-addon2">
                            Add
                        </Button>
                    </InputGroup>

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