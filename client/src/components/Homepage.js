import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'react-bootstrap';
import Footer from './Footer';
import AboutPage from './AboutPage';
import ContactSection from './ContactSection';
import '../../src/css/LandingPage.css';
import TopNavHp from './TopNavHp';
import CovidMain from './CovidMain';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Spinner from '../components/layout/spinner';
import SubscribeMe from './SubscribeMe';

const Homepage = ({ getCurrentProfile, auth, profile: { profile, loading } }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return loading && profile == null ? (
		<Spinner />
	) : (
		<body>
			<div id="LandingPage">
				<CovidMain />

				<div className="lp-container">
					<TopNavHp />
				</div>
			</div>
			<div>
				<AboutPage />
				<ContactSection />
				<SubscribeMe />
				<Footer />
			</div>
		</body>
	);
};

Homepage.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Homepage);
