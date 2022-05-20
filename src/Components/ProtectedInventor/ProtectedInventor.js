import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/UseUsers';

const ProtectedInventor = ({ user, handleControl }) => {
    // console.log(user)
    const { _id, name, img, price, description, quantity, suppllyer } = user || {};
    const handleProductDelete = id => {
        const proced = window.confirm('Are You Sure? You Want to Delete?')

        if (proced) {
            console.log('delete id', id)
            const url = `https://rocky-reef-06077.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        handleControl();
                        const remaining = useUsers.filter(user => user._id !== id);
                    }
                })
        }

    }
    return (
        <div className='col-12 col-lg-4 gy-4'>

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
                            <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                        </div>
                        <div>
                            <Button onClick={() => handleProductDelete(user._id)} className='btn btn-danger me-'>Delete</Button>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ProtectedInventor;