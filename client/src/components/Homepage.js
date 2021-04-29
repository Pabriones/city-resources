import React from 'react';
import Footer from './Footer';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import ContactSection from './ContactSection';
import '../../src/css/LandingPage.css';
import TopNavHp from './TopNavHp';

class Homepage extends React.Component {
	render() {
		return (
			<body>
				<div id="LandingPage">
					<div className="lp-container">
						<TopNavHp />
					</div>
				</div>
				<div>
					<AboutPage />
					<AboutPage2 />
					<ContactSection />
					<Footer />
				</div>
			</body>
		);
	}
}

export default Homepage;
