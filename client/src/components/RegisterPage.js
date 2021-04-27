import React from 'react';
import '../../src/css/RegisterPage.css';
import Footer from './Footer';
import LoginModal from './LoginModal';
import TopNav2 from './TopNav2';
import { Form, Button } from 'react-bootstrap';
import { PersonCircle, PersonPlus } from 'react-bootstrap-icons';

function RegisterPage() {
	return (
		<div>
			<div class="rp-container">
				<div className="row">
					<div className="col-sm-3" />

					<div className="col-sm-8">
						<div className="rp-title">CITY RESOURCES </div>

						<div className="usr-login">
							{' '}
							<LoginModal />
						</div>

						<div className="rp-form">
							<div className="rp-intro">
								By registering, you'll be able to save your favorites and return to them when needed.
							</div>
							<Form className="rp-input">
								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> First Name </div>
									</Form.Label>
									<Form.Control size="lg" placeholder="Enter First Name" />
								</Form.Group>

								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> Last Name </div>
									</Form.Label>
									<Form.Control size="lg" placeholder="Enter Last Name" />
								</Form.Group>

								{/* <label class="control-label" for="date">
										Date
									</label>
									<Form.Control
										class="form-control"
										id="date"
										name="date"
										placeholder="MM/DD/YYY"
										type="date"
									/> */}

								<Form.Group className="rp-label">
									<Form.Label>
										<div className="input-txt"> Date of Birth </div>
									</Form.Label>
									<Form.Control size="lg" placeholder="MM/DD/YYYY" type="date" />
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicEmail">
									<Form.Label>
										<div className="input-txt"> Email address </div>
									</Form.Label>
									<Form.Control size="lg" type="email" placeholder="Enter email" />
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicPassword">
									<Form.Label>
										<div className="input-txt"> Password </div>
									</Form.Label>
									<Form.Control size="lg" type="password" placeholder="Password" />
								</Form.Group>

								<Form.Group className="rp-label" controlId="formBasicPassword">
									<Form.Label>
										<div className="input-txt"> Password </div>
									</Form.Label>
									<Form.Control
										size="lg"
										type="password"
										placeholder="Enter Password again to confirm"
									/>
								</Form.Group>

								<div class="form-group">
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
								</div>

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
}

export default RegisterPage;
