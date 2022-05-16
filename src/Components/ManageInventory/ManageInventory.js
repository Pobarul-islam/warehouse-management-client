import React from 'react';
import useUsers from '../../hooks/UseUsers';
import SingleProducts from '../SingleProducts/SingleProducts';


const ManageInventory = () => {
    const allProducts = useUsers('http://localhost:5000/service')
    // console.log(allProducts)

    return (

        <div className='container mt-5 mb-3'>
            <h1 className='text-center'>Our Watches</h1>
            <div className='row'>
                {
                    allProducts?.map(user => <SingleProducts key={user.id} user={user}></SingleProducts>)

                }


            </div>

        </div>
    );
};

export default ManageInventory;