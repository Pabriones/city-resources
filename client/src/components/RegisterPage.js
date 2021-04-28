import React, { useState } from 'react';
import '../../src/css/RegisterPage.css';
import Footer from './Footer';
import LoginModal from './LoginModal';
import TopNav from './TopNav';
import { Form, Button } from 'react-bootstrap';
import { PersonCircle, PersonPlus } from 'react-bootstrap-icons';

const RegisterPage = () => {
	const [ formData, setFormData ] = useState({
		firsname: '',
		lastname: '',
		email: '',
		dateofbirth: '',
		password: '',
		password2: ''
	});

	const { firstname, lastname, email, dateofbirth, password, password2 } = formData;

	return (
		<div>
			<div class="rp-container">
				<div className="row">
					<div className="col-sm-3" />

					<div className="col-sm-8">
						<div className="rp-title">CITY RESOURCES </div>

						<div className="rp-form">
							<div className="rp-intro">
								By registering, you'll be able to save your favorites and return to them when needed.
							</div>
							<Form className="rp-input">
								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> First Name </div>
									</Form.Label>
									<Form.Control size="lg" placeholder="Enter First Name" value={firstname} required />
								</Form.Group>

								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> Last Name </div>
									</Form.Label>
									<Form.Control size="lg" placeholder="Enter Last Name" required />
								</Form.Group>

								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> Date of Birth </div>
									</Form.Label>
									<Form.Control size="lg" placeholder="MM/DD/YYYY" type="date" required />
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicEmail">
									<Form.Label>
										<div className="input-txt"> Email address </div>
									</Form.Label>
									<Form.Control size="lg" type="email" placeholder="Enter email" required />
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicPassword">
									<Form.Label>
										<div className="input-txt"> Password </div>
									</Form.Label>
									<Form.Control size="lg" type="password" placeholder="Password" required />
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
										required
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
										required
									/>
								</Form.Group>

								<Form.Group className="rp-label">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="invalidCheck2"
											required
										/>
										<label class="form-check-label" for="invalidCheck2">
											Agree to terms and conditions
										</label>
									</div>
								</Form.Group>

								<Button variant="" className="rp-submit" type="submit">
									<PersonPlus size={28} /> REGISTER
								</Button>

								<div className="rp-terms">
									By clicking REGISTER. You agree to our <a href="">Terms</a> and that you've read our{' '}
									<a href="">Privacy and Content Policy.</a>
								</div>
							</Form>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default RegisterPage;
