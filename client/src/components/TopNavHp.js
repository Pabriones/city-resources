import React, { Fragment, Redirect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../../src/css/TopNavHp.css";
import { SuitHeart } from "react-bootstrap-icons";
import { Link as Link1 } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
 

const TopNavHp = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <Nav.Link onClick={logout} href="/">
        <div className="user-logout-btn">LOGOUT</div>
      </Nav.Link>
    </ul>
  );

  const guestLinks = (
    <ul>
      return <Redirect to="/" />;
    </ul>
  );

  return (
    <nav class="navbar navbar-expand-lg navbar-dark topnav-user-container">
    <div class="container-fluid">
      <a class="navbar-brand topnav-main-title" href="#">
        CITY RESOURCES
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link1
              class="nav-link active topnav-light-links"
              to="AboutPage"
              spy={true}
              duration={500}
            >
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
     
      <ul class="navbar-nav user-links"> <li class="nav-item">
            <Link1
              class="nav-link active topnav-user-links"
              to="#"
              spy={true}
              duration={500}
            >
             <SuitHeart size={30} color="red" /> FAVORITES
            </Link1>
          </li>

           </ul> 

           <ul class="navbar-nav user-links">
           <p> Signed in as:</p> 
            <li class="nav-item topnav-user-links ">
        
         
           <Link1
              class="nav-link active topnav-user-links"
              to="/userprofile" spy={true} duration={500}
            >
              Hello User
            </Link1>
          </li></ul>
          
          
    
          
          
          
            <ul class="navbar-nav user-links">

<li class="nav-item">
 
  {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}

</li>
</ul>
      </div>
   
    </div>
  </nav>


    // <Container className="TopNavContainer">
    // 	<Navbar expand="lg" variant="dark">
    // 		<Navbar.Brand href="/homepage" className="navTitleHp">
    // 			<h1>CITY RESOURCES</h1>

    // 		</Navbar.Brand>
    // 		<Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
    // 		<Navbar.Collapse id="basic-navbar-nav ">
    // 			<Navbar.Collapse className="justify-content-end">
    // 				<Navbar.Text>
    // <a href="#login" className="nav-links favs">
    // 	<SuitHeart size={30} color="red" /> <Link to="/userprofile">My Favorites</Link>
    // </a>{' '}
    // 					<br />
    // 		<p>
    // 			{' '}
    // 			Signed in as:{' '}
    			// <Link1 className="nav-links user-logged" to="/userprofile" spy={true} duration={500}>
    			// 	Hello user
    			// </Link1>
    // {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    // 		</p>
    // 				</Navbar.Text>
    // 			</Navbar.Collapse>
    // 		</Navbar.Collapse>
    // 	</Navbar>
    // </Container>
  );
};

TopNavHp.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(TopNavHp);
