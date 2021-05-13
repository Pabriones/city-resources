import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "../../src/css/TopNav.css";
import LoginModal from "./LoginModal";
import { Link as Link1 } from "react-scroll";

const TopNav = () => {
  return (
    <Container className="TopNav-main-container">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="TopNav-main-title">
          <h1>CITY RESOURCES</h1>
        </Navbar.Brand>
        <Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="TopNav-main">
            <Nav.Link className="TopNav-main-links" href="#">
              <Link1 to="AboutPage" spy={true} duration={500}>
                <h3> SEARCH</h3>
              </Link1>
            </Nav.Link>
            <Nav.Link className="TopNav-main-links" href="/forms">
              <h3>FORMS</h3>
            </Nav.Link>
            <Nav.Link className="TopNav-main-links" href="#">
              <Link1 to="ContactSection" spy={true} duration={500}>
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
