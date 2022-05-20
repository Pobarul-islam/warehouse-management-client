import React from 'react';
import Footer from '../Footer/Footer';
import './Myitems.css';

const MyItems = () => {
    return (
        <div>
            <div className='myitems'>
                <h2 className='text-center text-primary'>My Items</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyItems;