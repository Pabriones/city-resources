import React from "react";
import "../../src/css/ResetPassword.css";
import Footer from "./Footer";
import TopNav from "./TopNav";
import { Button, Form, Row, Container, Col } from "react-bootstrap";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import ContactSection from "./ContactSection";

function ResetPassword() {
  return (
    <div className="rpass-container">
      <TopNav />{" "}
      <div className="rpass-form">
        <Container>
          <Row>
            <Col> </Col>
            <Col xs={8} className="form-col">
              <Form>
                <div className="reset-text">
                  <h1>Reset Password</h1>
                  <p>
                    Enter the email associated with your account and we'll send
                    you an email with instructions to reset your password
                  </p>
                </div>{" "}
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email Address
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="rpass-email"
                      type="email"
                      placeholder="Email"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col className="rpass-submit" sm={{ span: 10, offset: 2 }}>
                    <Button className="rpass-submitBtn" type="submit">
                      Send Instructions
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
