import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "../../src/css/loginmodal.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import Alert from "../components/layout/Alert";

const LoginModal = ({ login, isAuthenticated }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShown);
  };

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/homepage" />;
  }

  return (
    <>
      <Button variant=" " className="signin-btn" onClick={handleShow}>
        SIGN IN
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <div className="logContainer"> */}
        <div className="form-container  ">
          <form action="#" onSubmit={(e) => onSubmit(e)}>
            <div class="row signin-modal">
              <div class="col-md signin-title">
                <h1>SIGN IN</h1>
              </div>

              {/* <div class="col-md create-account-link">
                <Link to="/registerpage">
                  {" "}
                  <button className="create-account-btn">
                    {" "}
                    CREATE ACCOUNT
                  </button>
                </Link>
              </div> */}
            </div>

            <label className="email-pw-label">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />

            <label className="email-pw-label">
              <div class="row justify-content-end">
                <div class="col-md">Password</div>

                <div class="col-md forgot-pw-link">
                  <Link to="/resetpassword"> FORGOT PASSWORD?</Link>
                </div>
              </div>
            </label>

            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <div class="row show-password-link">
              <div class="col-md">
                <button className="showPw-btn" onClick={togglePassword}>
                  Show Password
                </button>
              </div>
            </div>

            <button className="Login-modal-btn">Sign in</button>
            <p>
              Don't have an account yet?{" "}
              <Link to="/registerpage">
                <br />
                CREATE ONE!
              </Link>
            </p>
          </form>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginModal);
