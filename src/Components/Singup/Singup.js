import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Singup.css'

const Singup = () => {
    return (
        <div className='singup-form mx-auto'>
            <h2 className='text-center'>Please Singup !!!</h2>

            <Form className='card p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
            
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Button className='form-submit' variant="primary" type="submit">
                    Singup
                </Button>
            </Form>
            Already have an account ? <Link to="/login">Please Login</Link>
        </div>
    );
};

export default Singup;