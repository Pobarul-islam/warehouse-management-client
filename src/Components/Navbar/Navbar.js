import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import CoustomLink from '../../CoustomLink/CoustomLink';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth);
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-primary" to="/">Stock Watches</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CoustomLink className="nav-link active text-primary" aria-current="page" to="/home">Home</CoustomLink>
                            </li>


                            <li className='nav-item'>

                                <CoustomLink className='nav-link text-primary' to="/inventory/:id">Inventory </CoustomLink>


                            </li>
                            <li className='nav-item'>


                                <CoustomLink className='nav-link text-primary' to="/blogs ">Blogs </CoustomLink>



                            </li>
                            <li className='nav-item'>

                                <CoustomLink className='nav-link text-primary' to="/about"> About</CoustomLink>

                            </li>


                            <li>
                                <CoustomLink className='nav-link text-primary' to="/contact"> Contact</CoustomLink>
                            </li>

                        </ul>



                        {/* second li  */}

                        <ul className='navbar-nav'>


                            {
                                user && <>
                                    <li className='nav-item'>

                                        <CoustomLink className='nav-link text-primary' to="/manageitem"> ManageItem</CoustomLink>

                                    </li>
                                    <li className='nav-item'>

                                        <CoustomLink className='nav-link text-primary' to="/additems"> AddItem</CoustomLink>

                                    </li>
                                    <li className='nav-item'>

                                        <CoustomLink className='nav-link text-primary' to="/myitem"> MyItems</CoustomLink>

                                    </li>
                                </>
                            }

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