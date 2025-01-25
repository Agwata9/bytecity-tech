import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <img
            src="./bytelogo.svg"
            width="50"
            height="50"
            alt="ByteCity Tech Solutions logo"
          />
          &nbsp; ByteCity Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={closeNavbar}>
              About Us
            </Nav.Link>
            <NavDropdown
              title="Our Services"
              id="our-services-dropdown"
              onClick={handleToggle}
            >
              <NavDropdown.Item
                as={Link}
                to="/web-design"
                onClick={closeNavbar}
              >
                Web Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/graphic-design"
                onClick={closeNavbar}
              >
                Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/social-media-management"
                onClick={closeNavbar}
              >
                Social Media Management
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/training" onClick={closeNavbar}>
              Training
            </Nav.Link>
            <Nav.Link as={Link} to="/store" onClick={closeNavbar}>
              Computer Store
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" onClick={closeNavbar}>
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={closeNavbar}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
