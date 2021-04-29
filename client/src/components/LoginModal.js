import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import RegisterModal from "./RegisterModal";
import "../../src/css/loginmodal.css";
import { PersonCircle } from "react-bootstrap-icons";
import { Icon } from "semantic-ui-react";
import Homepage from "./Homepage";
import { Link as Link3 } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { Link as Link2 } from "react-router-dom";

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
             <p>Don't have an account yet?<a href="/register" className="create-acct-link"> Create one!</a></p>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Link2 className="directLink" to="/homepage">
                {" "}
                <button type="button" class="directLinkBtn">
                  SIGN IN
                </button>
              </Link2>{" "}
              <a href="/resetpassword"> Forgot Password?</a>
  
            </form>
          </div>

          <h1>gsfsf</h1>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
