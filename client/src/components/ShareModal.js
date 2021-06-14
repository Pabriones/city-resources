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
import { ArrowUpRight, EnvelopeOpen } from "react-bootstrap-icons";
import "../../src/css/ShareModal.css";

function ShareModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant=" " className="website-linkBtn" onClick={handleShow}>
        <EnvelopeOpen size={25} /> Share
      </button>

      <Modal show={show} onHide={handleClose}>
        <div className="share-modal-container">
          <h2>
            {" "}
            <EnvelopeOpen size={50} /> <br />
            Enter email to share:
          </h2>
          <div className="col-5 form-group pt-2 mx-auto">
            <input
              className="form-control shadow-none"
              required="true"
              placeholder="Enter email"
              name="message"
            />
            <Button variant="outline-secondary">Send</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ShareModal;
