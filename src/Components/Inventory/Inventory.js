import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ProtectedInventor from '../ProtectedInventor/ProtectedInventor';


const Inventory = () => {
    const [control, setControl] = useState(true);
    const handleControl = (event) => {
        setControl(!control);
    }
    // const allProducts = UseUsers('http://localhost:5000/service')
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [control]);
    // console.log(allProducts)

    return (

        <div className='container mt-5 mb-3'>
            <h1 className='text-center'>Our Watches {allProducts.length}</h1>
            <div className='row'>
                {
                    allProducts?.map(user => <ProtectedInventor key={user._id} handleControl={handleControl} user={user}></ProtectedInventor>)



                }

            </div>

        </div>
    );
};

export default Inventory;