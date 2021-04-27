import React from 'react';
import Footer from './Footer';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import ContactSection from './ContactSection';
import '../../src/css/LandingPage.css';
import TopNav from './TopNav';

class Homepage extends React.Component {
	render() {
		return (
			<body>
				<h1>Page currenty in construction</h1>
				<div id="LandingPage">
					<div className="lp-container">
						<TopNav />
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
