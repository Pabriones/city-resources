import React, { Fragment, Redirect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../../src/css/TopNavHp.css';
import { SuitHeart, SuitHeartFill, Bell } from 'react-bootstrap-icons';
import { Link as Link1 } from 'react-scroll';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const TopNavHp = ({ auth: { isAuthenticated, loading, account }, logout }) => {
	const authLinks = (
		<ul>
			<Nav.Link onClick={logout} href="/">
				<div className="user-logout-btn">LOGOUT</div>
			</Nav.Link>
		</ul>
	);

	const guestLinks = (
		<ul>
			return <Redirect to="#" />;
		</ul>
	);

	return (
		<nav class="navbar navbar-expand-lg navbar-dark topnav-user-container">
			<div class="container-fluid">
				<a class="navbar-brand topnav-main-title" href="#">
					CITY RESOURCES
				</a>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link1 class="nav-link active topnav-light-links" to="AboutPage" spy={true} duration={500}>
								SEARCH
							</Link1>
						</li>
						<li class="nav-item">
							<a class="nav-link active topnav-main-links" href="/forms">
								FORMS
							</a>
						</li>
						<li class="nav-item">
							<Link1
								class="nav-link active topnav-main-links"
								to="ContactSection"
								spy={true}
								duration={500}
							>
								CONTACT
							</Link1>
						</li>
					</ul>

					<ul class="navbar-nav user-links">
						{' '}
						<li class="nav-item">
							<Link class="nav-link active topnav-user-links" to="userprofile" spy={true} duration={500}>
								<SuitHeart size={35} color="red" />  
							</Link>
						</li>   <Bell  size={35} color="black" />{" "}
					</ul>

					<ul class="navbar-nav user-links">
						<p> Signed in as:</p>
						<li class="nav-item topnav-user-links ">
							<Link class="nav-link active topnav-user-links" to="/userprofile" spy={true} duration={500}>
								{account && account.firstname}
							</Link>
						</li>
					</ul>

					<ul class="navbar-nav user-links">
						<li class="nav-item">
							{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
						</li>
					</ul>
				</div>
			</div>
		</nav>
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
