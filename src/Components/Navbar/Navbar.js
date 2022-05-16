import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CoustomLink from '../../CoustomLink/CoustomLink';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

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

                            <li className='nav-item'>

                                <CoustomLink className='nav-link' to="/manageinventory">ManageInventory </CoustomLink>


                            </li>
                            <li className='nav-item'>

                                {
                                    user ?
                                        <CoustomLink className='nav-link' to="">ManageItem </CoustomLink>
                                        :
                                        <CoustomLink className='nav-link' to="/blogs">Blogs </CoustomLink>
                                }


                            </li>
                            <li className='nav-item'>

                                {
                                    user ?

                                        <CoustomLink className='nav-link' to="/about">AddItem </CoustomLink>
                                        :
                                        <CoustomLink className='nav-link' to="/about"> About</CoustomLink>
                                }


                            </li>

                            <li>
                                {
                                    user ?

                                        <CoustomLink className='nav-link' to="">MyItems</CoustomLink>
                                        :
                                        <CoustomLink className='nav-link' to="/about"></CoustomLink>
                                }
                            </li>

                        </ul>



                        {/* second li  */}

                        <ul className='navbar-nav'>



                            <li className='nav-item'>
                                {
                                    user ?
                                        <Button className='btn' onClick={handleSignOut}>Log out</Button>
                                        :

                                        <Nav.Link className='btn btn-primary text-white' as={Link} to="/login">Login</Nav.Link>


                                }

                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;