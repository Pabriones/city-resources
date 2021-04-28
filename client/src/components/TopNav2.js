import React from "react";
import { Nav, Row, Col, Container, Navbar} from "react-bootstrap";
import "../../src/css/TopNav2.css";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import LoginModal from './LoginModal'

const TopNav2 = () => {
  return (
    <Container className="TopNavContainer2">
    <Navbar expand="lg" variant="light">
      <Navbar.Brand href="/" className="navTitle2">
        <h1>CITY RESOURCES</h1>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mr-auto2">
          <Nav.Link className="nav-links2" href="/">
            <Link1
              className="nav-links2"
              to="/"
              spy={true}
              duration={500}
            >
              <h3> ABOUT</h3>
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

    /* 
      <Nav className="nav-bar title justify-content-center">
        CITY RESOURCES{" "}
      </Nav>

      <Nav className="nav-bar justify-content-center">
        <Nav.Item>
          <Nav.Link className="nav-links" href="#">
            <Link1
              className="nav-links"
              to="AboutPage"
              spy={true}
              duration={500}
            >
              ABOUT
            </Link1>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-links" href="#">
            <Link1
              className="nav-links"
              to="ContactSection"
              spy={true}
              duration={500}
            >
              CONTACT
            </Link1>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-links" href="#">
            <Link1
              className="nav-links"
              to="#"
              spy={true}
              duration={500}
            >
              FORMS
            </Link1>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <LoginModal />
          </Nav.Link>
        </Nav.Item>
      </Nav>
</div> */
  );
};

export default TopNav2;
