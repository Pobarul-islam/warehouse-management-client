import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
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
            < h2 className='text-title' > Our Watches</ h2>


            <div className='d-flex'>

                <div className='col-2 container'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Item"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='btn-primary' variant="outline-white" id="button-addon2">
                            Add
                        </Button>

                    </InputGroup>

                    <Button className='container btn-primary' variant="outline-white" id="button-addon2">
                        Delevered
                    </Button>
                </div>


                <div className='services-container container col-10'>
                    {
                        service.map(service => <Service
                            key={service._id}
                            service={service}

                        ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;