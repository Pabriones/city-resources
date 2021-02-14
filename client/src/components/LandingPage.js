import React, { Fragment } from 'react';
import '../../src/css/LandingPage.css';
import { Icon } from 'semantic-ui-react';
import Footer from './Footer';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import LoginModal from './LoginModal';

class LandingPage extends React.Component {
	render() {
		return (
			<body>
				<div id="LandingPage">
					<div className="lp-container">
						<div className="lp-title">CITY RESOURCES</div>
						<div className="lp-nav">
							<Link1 className="lp-link" to="AboutPage" spy={true} duration={500}>
								ABOUT
							</Link1>
							<Link2 className="lp-link" to="contact" spy={true} duration={500}>
								CONTACT
							</Link2>
						</div>
						<div className="lp-flex-container">
							<div>
								<Icon>
									<button type="button" class="searchDirectoryBtn">
										<p className="searchText">
											<Link2 p className="searchText" to="/directory">
												SEARCH DIRECTORY
											</Link2>
											<ion-icon class="chevIconSearch" name="chevron-forward-outline" />
										</p>
									</button>
								</Icon>
							</div>

							<div className="loginm">
								<LoginModal />
							</div>

							<div>
								<Icon>
									<button type="button" class="emergencyLinesBtn">
										<p className="emergencyText">
											<Link2 className="emergencyText" to="/emergency">
												EMERGENCY AND CRISIS LINES
											</Link2>
											<ion-icon className="phone" name="call" />
										</p>
									</button>
								</Icon>
							</div>
						</div>
					</div>
				</div>
				<div>
					<AboutPage />
					<AboutPage2 />
					<Footer />
				</div>
			</body>
		);
	}
}

export default LandingPage;
