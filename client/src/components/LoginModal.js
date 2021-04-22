import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import RegisterModal from "./RegisterModal";
import "../../src/css/loginmodal.css";
import { PersonCircle } from 'react-bootstrap-icons';
import { Icon } from "semantic-ui-react";
import Homepage from './Homepage';
import { Link as Link3 } from "react-router-dom";
import RegisterPage from './RegisterPage'

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant=" " className="loginBtn" onClick={handleShow}>
      <PersonCircle size={20} />   USER LOG IN
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="logContainer" id="logContainer">
         
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>SIGN IN</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#"> Forgot Password</a>
              <button href="/homepage">Sign In</button>
              <Link3 className="rp-link" to="/register" spy={true} duration={500}>
                 REGISTER
              </Link3>
              
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
