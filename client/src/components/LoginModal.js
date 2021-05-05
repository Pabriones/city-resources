import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import RegisterPage from "./RegisterPage";
import "../../src/css/loginmodal.css";
import { PersonCircle } from "react-bootstrap-icons";
import { Icon } from "semantic-ui-react";
import { Link as Link3 } from "react-router-dom";
import { Link as Link2 } from "react-router-dom";
import Homepage from './Homepage';
import { Link } from "react-router-dom";


const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

  const { email, password} = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('SUCCESS');
	};

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
              <p>     Don't have an account yet?  <Link to="/registerpage">CREATE ONE!</Link></p>
              <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required />
              <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} required />
              <p><Link to="/resetpassword">Forgot Password?</Link></p>
              <button ><Link to="/homepage">Sign In</Link></button>   
            
            </form>
          </div>


        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
