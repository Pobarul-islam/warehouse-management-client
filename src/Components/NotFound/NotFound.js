import React from 'react';
import '../NotFound/NotFound.css'
import errorimg from '../NotFound/error-pic.webp'
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <div className='container col-12'>
                <img className='errorImg' src={errorimg} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;