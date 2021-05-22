import React, { Fragment, Redirect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../../src/css/TopNavHpDark.css';
import { SuitHeart } from 'react-bootstrap-icons';
import { Link as Link1 } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import TopNav2 from './TopNav2';

const TopNavHp = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<Nav.Link onClick={logout} href="/">
				<p className="logout-btn">LOGOUT</p>
			</Nav.Link>
		</ul>
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

					{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
				</Navbar.Brand>
				<Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav ">
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<a href="#login" className="nav-links favs">
								<SuitHeart size={30} color="red" /> <Link to="/userprofile">My Favorites</Link>
							</a>{' '}
							<br />
							<p>
								{' '}
								Signed in as:{' '}
								<Link1 className="nav-links user-logged" to="/userprofile" spy={true} duration={500}>
									Hello user
								</Link1>
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
