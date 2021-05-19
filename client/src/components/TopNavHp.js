import React, { Fragment, Redirect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import '../../src/css/TopNavHpDark.css';
import { SuitHeart } from 'react-bootstrap-icons';
import { Link as Link1 } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const TopNavHp = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<div className="logout-btn">
			<a onClick={logout} href="/">
				Logout
			</a>
		</div>
	);

	const guestLinks = (
		<ul>
			return <Redirect to="/" />;
		</ul>
	);

	return (
		<Container className="TopNavContainer">
			<Navbar expand="lg" variant="dark">
				<Navbar.Brand href="/homepage" className="navTitleHp">
					<h1>CITY RESOURCES</h1>
				</Navbar.Brand>
				<Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav ">
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<a href="#login" className="nav-links favs">
								<SuitHeart size={30} color="red" /> My Favorites
							</a>{' '}
							<br />
							<p>
								{' '}
								Signed in as:{' '}
								<Link1 className="nav-links user-logged" to="/userprofile" spy={true} duration={500}>
									Hello user
								</Link1>
								<br />
								{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}{' '}
							</p>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

TopNavHp.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(TopNavHp);
