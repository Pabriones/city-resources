import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "../../src/css/TopNav2.css";
import { Link as Link1 } from "react-router-dom";
import LoginModal from "./LoginModal";

// Used by SearchDirectoryPage, RegisterPage

const TopNav2 = () => {
  return (
    <Container className="TopNav-light">
      <Navbar expand="lg">
        <Navbar.Brand href="/" className="TopNav-light-title">
          <h1>CITY RESOURCES</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="top-nav2">
            <Nav.Link className="TopNav-light-links" href="/">
              <h3> SEARCH </h3>
            </Nav.Link>
            <Nav.Link className="TopNav-light-links" href="/forms">
              <h3>FORMS</h3>
            </Nav.Link>
            <Nav.Link className="TopNav-light-links" href="/">
              <h3> CONTACT</h3>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text>
              <LoginModal />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default TopNav2;