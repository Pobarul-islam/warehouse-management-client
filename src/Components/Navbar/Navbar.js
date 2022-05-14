import React from 'react';
import { Link } from 'react-router-dom';
import CoustomLink from '../../CoustomLink/CoustomLink';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Stock Watches</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CoustomLink className="nav-link active" aria-current="page" to="/home">Home</CoustomLink>
                            </li>
                            <li className="nav-item">
                                <CoustomLink className="nav-link" to="/inventory/:id">Inventory</CoustomLink>
                            </li>
                            <li className="nav-item">
                                <CoustomLink className="nav-link" to="/blogs">Blogs</CoustomLink>
                            </li>
                            <li className="nav-item">
                                <CoustomLink className="nav-link" to="/about">About</CoustomLink>
                            </li>
                            <li className="nav-item">
                                <CoustomLink className="nav-link" to="/login">Login</CoustomLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <p>SingOut</p>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;