import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../../src/css/RegisterPage.css';
import Footer from './Footer';
import TopNav2 from './TopNav2';
import { Form, Button } from 'react-bootstrap';
import { PersonPlus } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

function EnableSend() {
    document.getElementById("submit").disabled = false;
  }

const RegisterPage = ({ setAlert, register, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		firstname: '',
		lastname: '',
		email: '',
		dateofbirth: '',
		password: '',
		password2: ''
	});

	const { firstname, lastname, email, dateofbirth, password, password2 } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Password do not match', 'danger');
		} else {
			register({ firstname, lastname, email, dateofbirth, password });
		}
	};

	if (isAuthenticated) {
		return <Redirect to="/homepage" />;
	}

	return (
		<div>
			<div className="rp-container">
				<TopNav2 />
				<div className="row">
					<div className="col-sm-3 rp-side-bg" />
	
					<div className="col-sm">
					

						<div className="rp-form">
							<div className="rp-intro">
								By registering, you'll be able to save your favorites and return to them when needed.
							</div>
							<Form className="rp-input" onSubmit={(e) => onSubmit(e)}>
								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> First Name </div>
									</Form.Label>
									<Form.Control
										size="lg"
										placeholder="Enter First Name"
										type="text"
										name="firstname"
										value={firstname}
										onChange={(e) => onChange(e)}
										onClick={EnableSend}
									/>
								</Form.Group>

								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> Last Name </div>
									</Form.Label>
									<Form.Control
										size="lg"
										placeholder="Enter Last Name"
										name="lastname"
										value={lastname}
										onChange={(e) => onChange(e)}
									/>
								</Form.Group>

								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> Date of Birth </div>
									</Form.Label>
									<Form.Control
										size="lg"
										placeholder="MM/DD/YYYY"
										type="date"
										name="dateofbirth"
										value={dateofbirth}
										onChange={(e) => onChange(e)}
									/>
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicEmail">
									<Form.Label>
										<div className="input-txt"> Email address </div>
									</Form.Label>
									<Form.Control
										size="lg"
										type="email"
										placeholder="Enter email"
										name="email"
										value={email}
										onChange={(e) => onChange(e)}
									/>
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicPassword">
									<Form.Label>
										<div className="input-txt"> Password </div>
									</Form.Label>
									<Form.Control
										size="lg"
										type="password"
										placeholder="Password"
										minLength="7"
										name="password"
										value={password}
										onChange={(e) => onChange(e)}
									/>
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicPassword">
									<Form.Label>
										<div className="input-txt"> Re-enter Password </div>
									</Form.Label>
									<Form.Control
										size="lg"
										type="password"
										placeholder="Confirm Password"
										minLength="7"
										name="password2"
										value={password2}
										onChange={(e) => onChange(e)}
									/>
								</Form.Group>

		<div className="rp-terms">
									By clicking REGISTER. You agree to our <a href="">Terms</a> and that you've read our{' '}
									<a href="">Privacy and Content Policy.</a>
								</div>
								<div className="  form-group  mx-auto">
              <button
                type="submit"
                className="rp-submit"
                id="submit"
                name="submit"
                disabled="true"
              >
              Register
              </button></div>

								
							</Form>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

RegisterPage.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
