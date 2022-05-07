import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/allinventory'>All Inventory</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {
                        !user ?
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                            :
                            <Nav>

                                <button className='btn-success border-0' onClick={() => signOut(auth)}>Sign Out</button>
                                <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>

                            </Nav>

                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;