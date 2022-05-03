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
        <div className='watches'>
            <img className='w-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p className=''><small>{description}</small></p>
            <button onClick={() => navigateToCheckOutPage(id)} className='btn btn-primary'>Buy Now</button>
        </div>
    );
};

export default Service;