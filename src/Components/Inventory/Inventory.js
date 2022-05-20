import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ProtectedInventor from '../ProtectedInventor/ProtectedInventor';
import './inventory.css';


const Inventory = () => {
    const [control, setControl] = useState(true);
    const handleControl = (event) => {
        setControl(!control);
    }
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-reef-06077.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [control]);
    // console.log(allProducts)

    return (

        <div className='container inventory mb-3'>
            <h1 className='text-center text-primary'>Our Watches {allProducts.length}</h1>
            <div className='row'>
                {
                    allProducts?.map(user => <ProtectedInventor key={user._id} handleControl={handleControl} user={user}></ProtectedInventor>)



                }

            </div>

        </div>
    );
};

export default Inventory;