import React from "react";
import { Nav, Row, Col, Container } from "react-bootstrap";
import "../../src/css/TopNav2.css";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

const TopNav2 = () => {
  return (
    <Container>
      <Row>
        <Nav className="nav-bar2">
          <Col sm>
            <Nav.Item>
              <Nav.Link className="nav-links2" href="#">
              <Link2 className="nav-links2" to="/">
                        CITY RESOURCES 
                 </Link2>
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

export default TopNav2;
