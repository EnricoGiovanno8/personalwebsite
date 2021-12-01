import React from 'react';

import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div style={{ marginBottom: '12vh' }}>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '25vw' }}>
                        <Nav className="me-auto">
                            <Nav.Link href="#about-me">About Me</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            <Nav.Link href="#skill">Skill</Nav.Link>
                            <Nav.Link href="#project">Project</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;