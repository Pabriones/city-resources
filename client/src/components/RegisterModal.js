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
        


        
      </Modal>
    </>
  );
}

export default RegisterModal;
