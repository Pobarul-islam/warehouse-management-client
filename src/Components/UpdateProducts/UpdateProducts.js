import { stringify } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './UpdateProduct.css';

const UpdateProducts = () => {

    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [product, setProduct] = useState({});
    const [quantproduct, setQuantity] = useState(0)
    useEffect(() => {
        const url = `https://rocky-reef-06077.herokuapp.com/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setQuantity(data.quantity)
            })
    }, [quantproduct])

    const update = (e) => {
        e.preventDefault()
        const url = `https://rocky-reef-06077.herokuapp.com/service/${id}`;
        const quant = e.target.quantity.value;
        const quantity = parseInt(quant) + quantproduct
        const formData = { quantity }

        fetch(url, {
            method: 'PUT',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {

                setQuantity(quantity)
            })

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/myitems';

    function deliver() {
        const url = `https://rocky-reef-06077.herokuapp.com/service/${id}`;

        const quantity = quantproduct - 1
        const formData = { quantity }

        fetch(url, {
            method: 'PUT',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {
                setQuantity(quantity)
            })
    }



    return (
        <div>




            <div className='d-flex col-12 justify-content-between container updateproduct'>
                <div className=''>
                    <img className='w-50 img-fluid' src={product.img} alt="" />
                </div>
                <div className=''>
                    <h3>Name: {product.name}</h3>
                    <p>Description: {product.description}</p>
                    <p>Suppllyer: {product.suppllyer}</p>

                    <h5>Price: {product.price}</h5>
                    <h5>Quantity: {quantproduct}</h5> <br /> <br />
                    <form onSubmit={update} className="add-quantity">
                        <input name='quantity' type="number" placeholder='Add Quantity' required />

                        <button id='additem' type='submit' className='btn btn-primary'>ADD</button>

                    </form>

                    <button onClick={deliver} className='btn btn-primary'>Delever</button>
                    <div className='w-50 mx-auto'>
                        <Link to='/manageinventory' className='btn btn-success'>Manage Inventory</Link>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default UpdateProducts;







