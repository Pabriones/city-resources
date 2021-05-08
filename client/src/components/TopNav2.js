import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "../../src/css/TopNav2.css";
import { Link as Link1 } from "react-router-dom";
import LoginModal from "./LoginModal";

const TopNav2 = () => {
  return (
    <Container className="TopNavContainer2">
      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="/" className="navTitle2">
          <h1>CITY RESOURCES</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto2">
            <Nav.Link className="nav-links2" href="/">
              <Link1 className="nav-links2" to="/" spy={true} duration={500}>
                <h3> SEARCH </h3>
              </Link1>
            </Nav.Link>
            <Nav.Link className="nav-links2" href="#">
              <Link1 className="nav-links2" to="#" spy={true} duration={500}>
                <h3>FORMS</h3>
              </Link1>
            </Nav.Link>
            <Nav.Link className="nav-links2" href="#">
              <Link1
                className="nav-links2"
                to="ContactSection"
                spy={true}
                duration={500}
              >
                <h3> CONTACT</h3>
              </Link1>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end mr-auto2">
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
