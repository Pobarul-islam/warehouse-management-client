import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductInfo = () => {
    let { userid } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        const url = (`http://localhost:5000/service/${userid}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div>
            <h1>Name:</h1>


        </div>
    );
};

export default ProductInfo;