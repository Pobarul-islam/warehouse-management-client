import React from 'react';
import '../NotFound/NotFound.css'
import errorimg from '../NotFound/error-pic.webp'

const NotFound = () => {
    return (
        <div className='container'>
            <img className='errorImg' src={errorimg} alt="" />
        </div>
    );
};

export default NotFound;