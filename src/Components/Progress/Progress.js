import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const Progress = () => {
    return (
        <div className='mt-3'>
            <h2 className='text-center'>Progress Info</h2>

            <div className='mt-5'>
                <div className='container'>
                    <ProgressBar striped variant="success" now={90} />
                    <h4 className='text-primary'>Our Coustomer</h4>

                    <ProgressBar className='mt-4' striped variant="info" now={70} />
                    <h4 className='text-primary'>Watches</h4>

                    <ProgressBar className='mt-4' striped variant="warning" now={60} />
                    <h4 className='text-primary'>Services</h4>

                    <ProgressBar className='mt-4' striped variant="danger" now={30} />
                    <h4 className='text-primary'>Service Center</h4>


                </div>
            </div>
        </div>
    );
};

export default Progress;