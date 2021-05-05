import React from "react";
import "../../src/css/UserProfile.css";
import { Tab, Row, Col, Nav, Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import TopNavHpDark from "./TopNavHpDark";

function UserProfile() {
  return (
    <body>
      <div className="up-container">
        <TopNavHpDark />
        <div className="profile-container">
          <Tab.Container defaultActiveKey="Profile">
            <Row>
              <Col md={3}>
                <Nav variant="tabs" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="up-selections" eventKey="Profile">
                      <h2>Profile </h2>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="up-selections" eventKey="Password">
                      <h2>Password </h2>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="up-selections" eventKey="Favorites">
                      <h2>Favorites </h2>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Profile">
                    <div className="up-form-container">
                      <Form className="rp-input">
                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt"> First Name </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            placeholder="  First Name"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt"> Last Name </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            placeholder="  Last Name"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt"> Date of Birth </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            placeholder="MM/DD/YYYY"
                            type="date"
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          className="rp-label"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>
                            <div className="input-txt"> Email address </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            type="email"
                            placeholder="Enter email"
                            required
                          />
                        </Form.Group>

                        <Button variant="" className="rp-submit" type="submit">
                          UPDATE
                        </Button>
                      </Form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Password">
                    <div className="up-form-container">
                      <Form className="rp-input">
                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt"> New Password </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            placeholder="New Password"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt">Confirm password</div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            placeholder="Confirm password"
                            required
                          />
                        </Form.Group>

                        <Button variant="" className="rp-submit" type="submit">
                          CHANGE PASSWORD
                        </Button>
                      </Form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default UserProfile;
