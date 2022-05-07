import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/services';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (


        <div className='singup-form mx-auto'>
            <h2 className='text-center'>Please Login </h2>



            <Form onSubmit={handleUserSignIn} className='card p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

                </Form.Group>
                {
                    loading && <p><div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div></p>
                }
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>




                <Button className='form-submit' variant="primary" type="submit">
                    Login
                </Button>

                <p style={{ color: 'red' }}>{error?.message}</p>

            </Form>
            New to Stock Watches ? <Link className='text-decoration-none' to="/singup">Please Create an account !!</Link>

        </div>
    );
};

export default Login;