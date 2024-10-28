import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./bytelogo.svg"
            width="50"
            height="50"
            alt="ByteCity Tech Solutions logo"
            className="d-inline-block align-top"
          />
      
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Our Products & Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#hire-us">Hire Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
