import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import RegisterModal from './RegisterModal';

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        LOGIN
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
     {/*    <Modal.Header>
          <Modal.Title>Log in here</Modal.Title>
          <div>
            <RegisterModal/>
          </div>
        </Modal.Header>

        {/* Start of form for user to login */}
        
        <div class="modal-dialog modal-lg">
        {/* Enter email address  */}
     
        <div class= "form-group" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" /></div>
        
        <div class ="form.group" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </div>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        </div>
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
