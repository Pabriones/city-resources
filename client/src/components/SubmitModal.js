import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import "../../src/css/SubmitModal.css";
import { Link as Link2 } from "react-router-dom";
import { ArrowRight } from 'react-bootstrap-icons';


function SubmitModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant=" " className="submitBtn" onClick={handleShow}>
        SUBMIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="submitContainer" id="submitContainer">
          <h1>Thank you for your submission!</h1> Please look out for an email
          from us.
          <Link2 className="directLink" to="/">
            <button type="button" class="homeBtn">
           Back to homepage  <ArrowRight size={20} />
            </button>
          </Link2>
        </div>
      </Modal>
    </>
  );
}

export default SubmitModal;
