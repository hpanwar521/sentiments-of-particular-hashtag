import React from 'react'
import { Navbar,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light" id="navbar">
            <Container>
                <Navbar.Brand href="#" id='logo'>Sentiments of #hashtag </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
