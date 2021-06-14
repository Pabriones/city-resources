import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import '../../src/css/TopNav.css';
import LoginModal from './LoginModal';
import { Link as Link1 } from 'react-scroll';

const TopNav = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark topnav-main-container">
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
					<span class="navbar-toggler-icon" />
				</button>
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
					<LoginModal />
				</div>
			</div>
		</nav>
		// <Container className="TopNav-main-container">
		//   <Navbar expand="lg" variant="dark">
		//     <Navbar.Brand href="#home" className="TopNav-main-title">
		//       <h1>CITY RESOURCES</h1>
		//     </Navbar.Brand>
		//     <Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
		//     <Navbar.Collapse id="basic-navbar-nav ">
		//       <Nav className="TopNav-main">
		//         <Nav.Link className="TopNav-main-links" href="#">
		//           <Link1 to="AboutPage" spy={true} duration={500}>
		//             <h3> SEARCH</h3>
		//           </Link1>
		//         </Nav.Link>
		//         <Nav.Link className="TopNav-main-links" href="/forms">
		//           <h3>FORMS</h3>
		//         </Nav.Link>
		//         <Nav.Link className="TopNav-main-links" href="#">
		//           <Link1 to="ContactSection" spy={true} duration={500}>
		//             <h3> CONTACT</h3>
		//           </Link1>
		//         </Nav.Link>
		//       </Nav>
		//       <Navbar.Collapse className="justify-content-end mr-auto">
		//         <Navbar.Text>
		//           <LoginModal />
		//         </Navbar.Text>
		//       </Navbar.Collapse>
		//     </Navbar.Collapse>
		//   </Navbar>
		// </Container>
	);
};

export default TopNav;
