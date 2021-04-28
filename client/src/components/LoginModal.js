import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import RegisterPage from "./RegisterPage";
import "../../src/css/loginmodal.css";
import { PersonCircle } from 'react-bootstrap-icons';
import { Icon } from "semantic-ui-react";
import Homepage from './Homepage';
import { Link as Link3 } from "react-router-dom";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant=" " className="nav-linksBtn" onClick={handleShow}>
   SIGN IN 
      </Button>

      <Modal show={show} onHide={handleClose} >
        <div className="logContainer" >
         
          <div className="form-container sign-in-container" >
            <form action="#">
              <h1>SIGN IN</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/resetpassword"> Forgot Password?</a>
              <button href="/homepage">Sign In</button>            
            </form>
          </div>

        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
