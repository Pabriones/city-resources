import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../src/css/loginmodal.css";
import { Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth'


const LoginModal = ({login, isAuthenticated}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if(isAuthenticated){
    return <Redirect to='/homepage'/>
  }

  return (
    <>
      <Button variant=" " className="signin-btn" onClick={handleShow}>
        SIGN IN
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="logContainer">
          <div className="form-container sign-in-container">
            <form action="#" onSubmit={(e) => onSubmit(e)}>
              <h1>SIGN IN</h1>
              <h6>
                {" "}
                Don't have an account yet?{" "}
                <Link to="/registerpage">CREATE ONE!</Link>
              </h6>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required
              />
               
                <Link to="/resetpassword">Forgot Password?</Link>
             

              <button className="Login-modal-btn">
                <Link>Sign in</Link>
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
LoginModal.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login}) (LoginModal);
