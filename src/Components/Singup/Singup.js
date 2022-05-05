import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Singup.css'

const Singup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/services')
    }
    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Your two password did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    
    return (
        <div className='singup-form mx-auto'>
            <h2 className='text-center'>Please Singup !!!</h2>

            <Form onSubmit={handleCreateUser} className='card p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
            
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Button className='form-submit' variant="primary" type="submit">
                    Singup
                </Button>
                <p style={{color:"red"}}>{ error}</p>
            </Form>
            Already have an account ? <Link className='text-decoration' to="/login">Please Login</Link>
        </div>
    );
};

export default Singup;