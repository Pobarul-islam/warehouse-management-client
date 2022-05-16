import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProducts = ({ user }) => {
    // console.log(user)
    const { _id, name, img, price, description, quantity, suppllyer } = user || {};
    return (
        <div className='col-4 gy-4  '>
            <Card className='shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
                <Card.Img className='w-50' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <p>Price: {price} <br /> Quantity:  {quantity} <br /> Suppllyer: {suppllyer}</p>


                        <p>Description: {description}</p>
                    </Card.Text>
                    <Link to={`/user/${_id}`} className='btn btn-primary'>Update</Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProducts;