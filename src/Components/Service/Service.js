import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToCheckOutPage = id => {
        navigate(`/checkout/ ${id}`)
    }
    
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToCheckOutPage(id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;