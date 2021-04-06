import React from 'react';
import '../../src/css/Footer.css';
import { Link as Link2 } from 'react-scroll';
import { Link as Link1 } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<div className="ft-container">
				<div className="row">
					{/* Column1 */}
					<div className="col-sm">
						<div className="ft-text">
							<Link1 className="ft-link-logo" to="/" spy={true} duration={500}>
								CITY <br />
								RESOURCES
							</Link1>
						</div>
					</div>
					{/* Column2 */}
					<div className="col-sm">
						<ui className="list-unstyled">
							<div className="ft-text">
								<li>
									<Link1 to className="ft-link" to="/">
										HOME
									</Link1>
								</li>
							</div>

							<div className="ft-text">
								{' '}
								<li>
									<Link1 className="ft-link" to="/directory" spy={true} duration={500}>
										{' '}
										SEARCH DIRECTORY{' '}
									</Link1>
								</li>
							</div>
						</ui>
					</div>

					{/* Column3 */}
					<div className="col-sm">
						<ui className="list-unstyled">
							<div className="ft-text">
								{' '}
								<li>
									<Link2 className="ft-link" to="AboutPage" spy={true} duration={500}>
										ABOUT
									</Link2>
								</li>
							</div>

							<div className="ft-text">
								{' '}
								<li>
									<Link2 className="ft-link" to="ContactSection" spy={true} duration={500}>
										CONTACT
									</Link2>
								</li>
							</div>
						</ui>
					</div>
				</div>
				<div className="row">
					<p className="col-lg">&copy;{new Date().getFullYear()} CITYRESOURCES</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
