import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <a href="#" className="logo">Stock Watches</a>
            <div className='navbar-item'>
                <a href="/home">Home</a>
                <a href="/checkout">Checkout</a>
                <a href="/services">Services</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
            </div>
       </nav>
    );
};

export default Header;