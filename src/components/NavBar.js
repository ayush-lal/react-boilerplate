import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import variables from "../assets/scss/_variables.module.scss";
import { Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: variables.secondaryColour }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="title">React Boilerplate</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text>
              <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/page1" className="nav-link">
                  Page 1
                </Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
