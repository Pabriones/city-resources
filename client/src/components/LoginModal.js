import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "../../src/css/LoginModal.css";
// import Bootstrap from "react-bootstrap";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button type ="button" class="btn btn-link" onClick={handleShow}>
        LOG IN
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Log in here</Modal.Title>
        </Modal.Header>

        {/* Start of form for user to login */}
        <Form>
        {/* Enter email address  */}
        <Modal.Body>I am under construction</Modal.Body>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        </Form>
        {/* End of form for users to login */}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
