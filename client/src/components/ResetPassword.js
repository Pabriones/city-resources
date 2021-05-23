import React from "react";
import "../../src/css/ResetPassword.css";
import Footer from "./Footer";
import TopNav2 from "./TopNav2";
import { Button, Form, Row, Container, Col } from "react-bootstrap";

function myFunction() {
  alert("I am an alert box!");
}

function ResetPassword() {
  
  return (
    <body>       <TopNav2 />{" "}
      <div className="rpass-container">
 
        <div className="rpass-form">
          <Container>
            <Row>
              {/* <Col> </Col> */}
              <Col xs={12} className="form-col">
                <Form>
                  <div className="reset-text">
                    <h1>Reset Password</h1>
                    <p>
                      Enter the email associated with your account and we'll
                      send you an email with instructions to reset your password
                    </p>
                  </div>{" "}
                  <div className="rp-input">
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                      Email Address
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        className="rpass-email"
                        type="email"
                        placeholder="Email"
                      />
                    </Col>
                  </Form.Group></div>
                  <Form.Group as={Row}>
                    <Col className="rpass-submit" sm={{ span: 10, offset: 1 }}>
                      <Button className="rpass-submitBtn" type="submit" onclick="myFunction()">
                        Send Instructions
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Container>
        </div>
      </div>{" "}
      <Footer />
    </body>
  );
}

export default ResetPassword;
