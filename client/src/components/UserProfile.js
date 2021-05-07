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
import Avatar from "react-avatar";

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
                      <h2>Edit Profile </h2>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="up-selections" eventKey="Account">
                      <h2> ACCOUNT </h2>
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
                      <div className="avatar-circle">
                        <Avatar
                          color={Avatar.getRandomColor("sitebase", [
                            "red",
                            "green",
                            "blue",
                            "purple",
                          ])}
                          round="100px"
                          name="Selina Nguyen"
                        />
                      </div>{" "}
                      <Form className="user-profile-input">
                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt"> First Name </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            className="input-bar-up"
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
                            className="input-bar-up"
                            placeholder="  Last Name"
                            required
                          />
                        </Form.Group>
                   
                        <Button
                          className="save-btn-up"
                          variant="outline-secondary"
                        >
                          UPDATE
                        </Button>
                      </Form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Account">
                    <div className="up-form-container">
                      <Form className="user-profile-input">
                        <Form.Group
                          className="rp-label"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>
                            <div className="input-txt"> Email address </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            className="input-bar-up"
                            type="email"
                            placeholder="Enter email"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt"> Old Password </div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            className="input-bar-up"
                            placeholder="New Password"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="rp-label">
                          <Form.Label>
                            <div className="input-txt">New password</div>
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            className="input-bar-up"
                            placeholder="Confirm password"
                            required
                          />
                        </Form.Group>

                        <Button
                          className="save-btn-up"
                          variant="outline-secondary"
                        >
                          SAVE
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
                      <Accordion defaultActiveKey="/">
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
