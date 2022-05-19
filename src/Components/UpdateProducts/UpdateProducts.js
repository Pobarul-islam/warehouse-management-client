import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateProducts = () => {

    const { id } = useParams();
    const [inventory, setInventory] = useState({})
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const update = (e) => {
        e.preventDefault()
        const url = `http://localhost:5000/service/${id}`;
        const quant = e.target.quantity.value
        console.log(quant)
        const quantity = parseInt(product) + product.quantity;
        const formData = { quantity }

    }

    //     fetch(url, {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData)
    //     })
    //         .then(response => response.json())
    //         .then(json => {

    //             setProduct(product)
    //         })
    // }




    return (
        <div>



            <div className='d-flex justify-content-between container mt-5'>
                <div className='col-6'>
                    <img className='w-50' src={product.img} alt="" />
                </div>
                <div className='col-6'>
                    <h3>Name: {product.name}</h3>
                    <p>Description: {product.description}</p>
                    <p>Suppllyer: {product.suppllyer}</p>

                    <h5>Price: {product.price}</h5>
                    <h5>Quantity: {product.quantity}</h5> <br /> <br />
                    <form onSubmit={update} className="add-quantity">
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







