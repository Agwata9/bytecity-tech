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
            {/* Navbar Links */}
            <Nav.Link
              as={Link}
              to="/"
              onClick={closeNavbar}
              style={{ fontWeight: "bold" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about-us"
              onClick={closeNavbar}
              style={{ fontWeight: "bold" }}
            >
              About Us
            </Nav.Link>

            {/* Dropdown for Services */}
            <NavDropdown
              title="Our Services"
              id="our-services-dropdown"
              onClick={handleToggle}
              drop="down"
              show={expanded} // Controls dropdown visibility on mobile
              style={{ fontWeight: "bold" }}
            >
              <NavDropdown.Item
                as={Link}
                to="/web-design"
                onClick={closeNavbar}
                style={{ fontWeight: "bold" }}
              >
                Web Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/graphic-design"
                onClick={closeNavbar}
                style={{ fontWeight: "bold" }}
              >
                Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/social-media-management"
                onClick={closeNavbar}
                style={{ fontWeight: "bold" }}
              >
                Social Media Management
              </NavDropdown.Item>
            </NavDropdown>

            {/* Other Links */}
            <Nav.Link
              as={Link}
              to="/training"
              onClick={closeNavbar}
              style={{ fontWeight: "bold" }}
            >
              Training
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/store"
              onClick={closeNavbar}
              style={{ fontWeight: "bold" }}
            >
              Computer Store
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/careers"
              onClick={closeNavbar}
              style={{ fontWeight: "bold" }}
            >
              Careers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              onClick={closeNavbar}
              style={{ fontWeight: "bold" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
