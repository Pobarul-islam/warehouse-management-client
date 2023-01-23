import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../img/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        return (
            errorElement = <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate('/inventory')
    }
    return (
        <div>
            <div className='mt-3 d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}

                    className='btn btn-dark w-50 d-block mx-auto'>Google SignIn
                    <img style={{ width: "50px" }} src={google} alt="" />
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;