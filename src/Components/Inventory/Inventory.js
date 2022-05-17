import React from 'react';
import { Button } from 'react-bootstrap';
import SingleProducts from '../SingleProducts/SingleProducts';
import UseUsers from '../../hooks/UseUsers';
import ProtectedInventor from '../ProtectedInventor/ProtectedInventor';


const Inventory = () => {
    const allProducts = UseUsers('http://localhost:5000/service')
    // console.log(allProducts)

    return (

        <div className='container mt-5 mb-3'>
            <h1 className='text-center'>Our Watches {allProducts.length}</h1>
            <div className='row'>
                {
                    allProducts?.map(user => <ProtectedInventor key={user.id} user={user}></ProtectedInventor>)


                }

            </div>

        </div>
    );
};

export default Inventory;