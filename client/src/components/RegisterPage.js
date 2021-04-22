import React from "react";
import "../../src/css/RegisterPage.css";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import TopNav2 from "./TopNav2";
import { Form, Button } from "react-bootstrap";
import { PersonCircle, PersonPlus } from "react-bootstrap-icons";

function RegisterPage() {
  return (
    <div>
      <div class="rp-container">
        <div className="row">
          <div className="col-sm-3"></div>

          <div className="col-sm-8">
            <div className="rp-title">CITY RESOURCES </div>

            <div className="usr-login">
              {" "}
              <LoginModal />
            </div>

            <div className="rp-form">
              <div className="rp-intro">
                By registering, you'll be able to save your favorites and return
                to them when needed.
              </div>
              <Form className="rp-input">
                <Form.Group className="rp-label" controlId="formBasicEmail">
                  <Form.Label>
                    <div className="input-txt"> Email address </div>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="rp-label" controlId="formBasicPassword">
                  <Form.Label>
                    <div className="input-txt"> Password </div>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="" className="rp-submit" type="submit">
                  <PersonPlus size={28} /> REGISTER
                </Button>

                <div className="rp-terms">
                  By clicking REGISTER. You agree to our <a href="">Terms</a>{" "}
                  and that you've read our{" "}
                  <a href="">Privacy and Content Policy.</a>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RegisterPage;
