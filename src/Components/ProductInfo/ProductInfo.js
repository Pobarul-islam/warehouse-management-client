import React from 'react';
import { useParams } from 'react-router-dom';
import UseUsers from '../../hooks/UseUsers';
// import SingleProducts from '../SingleProducts/SingleProducts';

const ProductInfo = () => {
    let userid = useParams();
    // console.log(userid)

    const allUsers = UseUsers(`http://localhost:5000/service}`)
    // console.log(allUsers[0])
    return (
        <div>


        </div>
    );
};

export default ProductInfo;