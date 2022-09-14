import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' className='fs-3 text-success fw-bold'>Dream Bike</Navbar.Brand>
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
                                    <Nav.Link onClick={() => signOut(auth)}>Sign Out</Nav.Link>
                                </Nav>
                        }
                    </Nav>




                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;