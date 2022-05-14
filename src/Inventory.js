import React from 'react';
import { Link } from 'react-router-dom';
import SingleProducts from './Components/SingleProducts/SingleProducts';
import UseUsers from './hooks/UseUsers';


const Inventory = () => {
    const allProducts = UseUsers('http://localhost:5000/service')
    // console.log(allProducts)

    return (

        <div className='container mt-5 mb-3'>
            <h1 className='text-center'>Our Watches {allProducts.length}</h1>
            <div className='row'>
                {
                    allProducts?.map(user => <SingleProducts key={user.id} user={user}></SingleProducts>)

                }


            </div>

        </div>
    );
};

export default Inventory;