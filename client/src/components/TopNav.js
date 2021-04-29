import React from "react";
import { Nav, Row, Col, Container, Button, Navbar } from "react-bootstrap";
import "../../src/css/TopNav.css";
import LoginModal from "./LoginModal";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

const TopNav = () => {
  return (
    <Container className="TopNavContainer">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="navTitle">
          <h1>CITY RESOURCES</h1>
        </Navbar.Brand>
        <Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto">
            <Nav.Link className="nav-links" href="#">
              <Link1
                className="nav-links"
                to="AboutPage"
                spy={true}
                duration={500}
              >
                <h3> ABOUT</h3>
              </Link1>
            </Nav.Link>
            <Nav.Link className="nav-links" href="#">
              <Link1 className="nav-links" to="#" spy={true} duration={500}>
                <h3>FORMS</h3>
              </Link1>
            </Nav.Link>
            <Nav.Link className="nav-links" href="#">
              <Link1
                className="nav-links"
                to="ContactSection"
                spy={true}
                duration={500}
              >
                <h3> CONTACT</h3>
              </Link1>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end mr-auto">
            <Navbar.Text>
              <LoginModal />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default TopNav;
