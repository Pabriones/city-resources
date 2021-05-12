import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Footer from './Footer';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import ContactSection from './ContactSection';
import '../../src/css/LandingPage.css';
import TopNavHp from './TopNavHp';
import CovidMain from './CovidMain';

class Homepage extends React.Component {
	render() {
		return (
			<body>
				<div id="LandingPage">
					<Jumbotron fluid>
						<Container className="lp-covid-jumbo">
							<CovidMain />
						</Container>
					</Jumbotron>
					<div className="lp-container">
						<TopNavHp />
					</div>
				</div>
				<div>
					<AboutPage />
					{/* <AboutPage2 /> */}
					<ContactSection />
					<Footer />
				</div>
			</body>
		);
	}
}

export default Homepage;
