import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import LoginModal from './LoginModal';

function RegisterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="primary" onClick={handleShow}>
        REGISTER
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Register here</Modal.Title>
          <div>
          <LoginModal/>
          </div>
        </Modal.Header>

        {/* Start of form for user to login */}
        <Form>
        {/* Enter email address  */}
        <Modal.Body>I am under construction</Modal.Body>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        <form>
        <div class="row">
        <div class="col">
        <Form.Label>Enter First Name</Form.Label>
        <input type="text" class="form-control" placeholder="First name"/>
        </div>
        <div class="col">
        <Form.Label>Enter Last Name</Form.Label>
        <input type="text" class="form-control" placeholder="Last name"/>
        </div>
        
        </div>
        </form>

        <form class="form-inline">
          <div class="form-group">
            <label for="inputPassword6">Password</label>
            <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
            <small id="passwordHelpInline" class="text-muted">
              Must be 8-20 characters long.
            </small>
            <label for="inputPassword6">Enter Password again</label>
            <input type="password" id="inputPassword7" class="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
          </div>
        </form>
        
        </Form>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
