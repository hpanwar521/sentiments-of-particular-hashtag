import React from 'react'
import { Navbar,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" variant="light" bg="light" id="navbar">
            <Container>
                <Navbar.Brand href="#" id='logo' onClick={()=>{navigate(`/`)}}>Sentiments of #hashtag </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
