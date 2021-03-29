import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className="mb-5 mt-2">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://i.ibb.co/Y8qyFkV/Group-1329.png"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link as={Link} to="/addEvents" style={{ color: 'black', fontWeight: '500' }}>Add Events</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/" style={{ color: 'black', fontWeight: '500' }}>
                            Dashboard
                        </Nav.Link>
                        <Button className="mr-2 shadow-none" variant="primary">
                            Register
                        </Button>
                        <Button className="shadow-none" variant="dark">
                            Admin
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;