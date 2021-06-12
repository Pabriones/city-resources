import React from 'react';
import '../../src/css/SubscribeMe.css';
import { Link as Link2 } from 'react-router-dom';
import SimpleContactForm from './SimpleContactForm';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscribeMe = () => {
	const notifySub = () => {
		toast.success('Added!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	const subscribe = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_wkyp2uz', 'template_5xd7yrd', e.target, 'user_HarQvCQDVRSyllfUxOCDt').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	return (
		<div class="row sub-content">
			<h1>Join our mailing list!</h1>
			<p>Sign up to receive email updates on events nearby, new resources and more.</p>
			<form onSubmit={subscribe}>
				<div className="row  subscribe-section ">
					<div className=" form-group pt-2 mx-auto sub-email">
						<input
							type="email"
							className="form-control shadow-none sub-input"
							required="true"
							placeholder="Email Address"
							name="email"
						/>
					</div>

					<div className="sub-submit">
						<button type="submit" className="subBtn" id="sub" name="submit" onClick={notifySub}>
							ADD ME TO THE LIST!
						</button>
						{/* {ToastContainer} */}
					</div>
				</div>
			</form>
		</div>
	);
};

export default SubscribeMe;
