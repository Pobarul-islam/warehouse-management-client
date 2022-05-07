import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Services.css';

const Services = () => {
    // const [service, setService] = useProducts();
    const [service, setService] = useState([]);
    fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))




    return (
        <div className='services-section'>

            <h2 className='text-title'>Our Watches</h2>

            <div className='services-container container'>
                {
                    service.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>

            {/* <div>
                {
                    service.slice(0, 6).map((rating) => {
                        <StockWatches key={service.name} service={service}></StockWatches>
                    })
                }
            </div> */}

        </div>
    );
};

export default Services;