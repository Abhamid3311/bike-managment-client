import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Dream Bike</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/allinventory'>All Inventory</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                        {
                            !user ?
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                                :
                                <Nav>
                                    <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                                    <Nav.Link as={Link} to='/myitem'>My Items</Nav.Link>

                                    <button className='btn-success border-0' onClick={() => signOut(auth)}>Sign Out</button>

                                </Nav>

                        }
                    </Nav>




                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;