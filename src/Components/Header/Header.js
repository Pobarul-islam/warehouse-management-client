import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='light' className='fixed-top' variant="primary">
                <Container>
                    <Navbar.Brand href="#home">Stock Watches</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>

                        <Nav className='header-text'>

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Watches</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;