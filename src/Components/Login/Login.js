
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login-page mx-auto'>
            <h2 className='text-center'>Please Login !!!</h2>
            <Form className='card p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Button className='form-submit' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            New to Stock Watches ? <Link to="/singup">Please Create an account</Link>
        </div>
    );
};

export default Login;