import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const Service = ({ service }) => {
        const { id, name, img, price, description } = service;
        const navigate = useNavigate();
        const navigateToCheckoOutPage = id => {
            navigate(`/checkout/ ${id}`)
        }
    }
    
    return (
        <div>
            
        </div>
    );
};

export default Service;