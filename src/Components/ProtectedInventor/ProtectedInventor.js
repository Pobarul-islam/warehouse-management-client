import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProtectedInventor = ({ user }) => {
    // console.log(user)
    const { _id, name, img, price, description, quantity, suppllyer } = user || {};
    return (
        <div className='col-4 gy-4'>
            <Card className='shadow-lg mb-3 bg-white rounded' style={{ width: '18rem' }}>
                <Card.Img className='w-50 mx-auto mt-3' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <p>Price: {price} <br /> Quantity:  {quantity} <br /> Suppllyer: {suppllyer}</p>


                        <p>Description: {description}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Link to={`/user/${_id}`} className='btn btn-success'>Update</Link>
                        </div>
                        <div>
                            <Link to={`/user/${_id}`} className='btn btn-danger me-'>Delete</Link>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ProtectedInventor;