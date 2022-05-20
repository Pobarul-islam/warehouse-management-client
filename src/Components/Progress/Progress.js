import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const Progress = () => {
    return (
        <div>
            <h2 className='text-center'>Progress Info</h2>

            <div>
                <div className='container'>
                    <h4 className='text-primary'>Our Coustomer</h4>
                    <ProgressBar striped variant="success" now={40} />
                    <h4 className='text-primary'>Watches</h4>
                    <ProgressBar className='mt-4' striped variant="info" now={20} />
                    <h4 className='text-primary'>Services</h4>
                    <ProgressBar className='mt-4' striped variant="warning" now={60} />
                    <h4 className='text-primary'>Service Center</h4>
                    <ProgressBar className='mt-4' striped variant="danger" now={80} />

                </div>
            </div>
        </div>
    );
};

export default Progress;