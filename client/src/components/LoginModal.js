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
      <Button variant=" " className="nav-linksBtn" onClick={handleShow}>
   SIGN IN 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="logContainer" id="logContainer">
         
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>SIGN IN</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#"> Forgot Password?</a>
              <button href="/homepage">Sign In</button>            
            </form>
          </div>


          <h1>gsfsf</h1>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
