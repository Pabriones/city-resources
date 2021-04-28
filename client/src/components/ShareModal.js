import React, { useState } from "react";
import {
  Modal,
  Button,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link as Link2 } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import "../../src/css/ShareModal.css";

function ShareModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant=" " className="shareBtn" onClick={handleShow}>
        PRINT RESULTS
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="shareContainer" id="shareContainer">
          <div className="sm-print-btn">
            <button type="button" className="sm-btn">
              <a href="#">PRINT</a>
            </button>
          </div>

          <h2>Create an account to save your favorites and share by email!</h2>
        </div>
      </Modal>
    </>
  );
}

export default ShareModal;
