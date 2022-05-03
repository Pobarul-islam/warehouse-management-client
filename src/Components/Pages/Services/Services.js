import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
        .then(data=>setService(data))
    } ,[])

    return (
        <div className='mt-5'>
          
            <h2 className='text-center'>Our Services {service.length}</h2>
            
            <div>
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