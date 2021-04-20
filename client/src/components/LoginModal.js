import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import RegisterModal from "./RegisterModal";
import "../../src/css/LoginModal.css";
import { PersonCircle } from 'react-bootstrap-icons';


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
              <input type="email" placeholder="Name" />
              <input type="password" placeholder="Password" />
              <a href="#"> Forgot Password</a>
              <button>Sign In</button>

            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
