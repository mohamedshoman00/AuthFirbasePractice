import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Nav</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center">
            <NavLink
              className="p-2 text-decoration-none text-light link-secondary"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="p-2 text-decoration-none text-light link-secondary"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="p-2 text-decoration-none text-light link-secondary"
              to="/signup"
            >
              Signup
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
