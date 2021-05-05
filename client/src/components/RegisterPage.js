import React, { useState } from "react";
import "../../src/css/RegisterPage.css";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import TopNav2 from "./TopNav2";
import { Form, Button } from "react-bootstrap";
import { PersonCircle, PersonPlus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dateofbirth: "",
    password: "",
    password2: "",
  });

  const {
    firstname,
    lastname,
    email,
    dateofbirth,
    password,
    password2,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Password do not match");
    } else {
      console.log("SUCCESS");
    }
  };

  return (
    <div>
      <div className="rp-container">
        <div className="row">
          <div className="col-sm-3" />

          <div className="col-sm-8">
            <TopNav2 />

            <div className="rp-form">
              <div className="rp-intro">
                By registering, you'll be able to save your favorites and return
                to them when needed.
              </div>
              <Form className="rp-input" onSubmit={(e) => onSubmit(e)}>
                <Form.Group className="rp-label">
                  <Form.Label>
                    <div className="input-txt"> First Name </div>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="Enter First Name"
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="rp-label">
                  <Form.Label>
                    <div className="input-txt"> Last Name </div>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => onChange(e)}
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
                    name="dateofbirth"
                    value={dateofbirth}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="rp-label" controlId="formBasicEmail">
                  <Form.Label>
                    <div className="input-txt"> Email address </div>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
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
                    minLength="7"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="rp-label" controlId="formBasicPassword">
                  <Form.Label>
                    <div className="input-txt"> Re-enter Password </div>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Confirm Password"
                    minLength="7"
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="rp-label">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
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
};

export default RegisterPage;
