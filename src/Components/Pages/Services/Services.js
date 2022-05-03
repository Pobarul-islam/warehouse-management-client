import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Services.css';

const Services = () => {
    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
        .then(data=>setService(data))
    } ,[])

    return (
        <div className='mt-5'>
          
            <h2 className='text-title'>Our Watches</h2>
            
            <div className='services-container container mb-5'>
                {
                    service.map(service => <Service
                        key={service.id}
                        service={service}
                    
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default Services;