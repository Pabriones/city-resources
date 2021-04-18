import React from "react";
import { Nav, Row, Col, Container } from "react-bootstrap";
import "../../src/css/TopNav.css";
import LoginModal from "./LoginModal";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

const TopNav = () => {
  return (
    <Container>
      <Row>
        <Col sm>
          <Nav className="nav-bar nb-title">CITY RESOURCES </Nav>
        </Col>
        <Nav className="nav-bar">
          <Col sm>
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
          </Col>
          <Col sm>
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
          </Col>
          <Col sm>
            {" "}
            <Nav.Item>
              <Nav.Link className="nav-links" href="#">
                <Link1 className="nav-links" to="#" spy={true} duration={500}>
                  FORMS
                </Link1>
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col sm>
            <Nav.Item className="login-link">
              <Nav.Link href="#">
                <LoginModal />
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Nav>
      </Row>
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

export default TopNav;
