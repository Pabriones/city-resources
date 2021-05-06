import React from "react";
import "../../src/css/UserProfile.css";
import {
  Tab,
  Row,
  Col,
  Nav,
  Form,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import Footer from "./Footer";
import TopNavHpDark from "./TopNavHpDark";
import {
  ArrowRight,
  ArrowRightCircle,
  EnvelopeOpen,
} from "react-bootstrap-icons";

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
                    <Nav.Link
                      className="up-selections"
                      eventKey="Notifications"
                    >
                      <h2>Notifications </h2>
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

                  <Tab.Pane eventKey="Notifications">
                    <div className="up-form-container">
                      <p>
                        We'll always let you know about important changes, but
                        you pick what you would like to get more information
                        about.
                      </p>
                      <Accordion defaultActiveKey="0">
                        <Card className="accordion-up">
                          <Card.Header className="accordion-header">
                            <p>
                              By Email
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0"
                                className="accordion-edit"
                              >
                                {" "}
                                <ArrowRightCircle size={31} />
                                {/* <button className="edit-btn">EDIT</button> */}
                              </Accordion.Toggle>
                            </p>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              {" "}
                              <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                  className="checkbox-label-up"
                                  type="checkbox"
                                  label="Information related to my favorites"
                                />
                              </Form.Group>
                              <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                  className="checkbox-label-up"
                                  type="checkbox"
                                  label="City Resources updates and announcements"
                                />
                                <Button
                                  className="save-btn-up"
                                  variant="outline-secondary"
                                >
                                  SAVE
                                </Button>
                              </Form.Group>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>

                        <Card className="accordion-up">
                          <Card.Header className="accordion-header">
                            <p>
                              On City Resources{" "}
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="1"
                                className="accordion-edit"
                              >
                                <ArrowRightCircle size={31} />
                              </Accordion.Toggle>
                            </p>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              {" "}
                              <Button
                                className="save-btn-up"
                                variant="outline-secondary"
                              >
                                SAVE
                              </Button>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
