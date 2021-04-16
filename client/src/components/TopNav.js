import React from "react";
import { Nav } from "react-bootstrap";
import "../../src/css/TopNav.css";
import LoginModal from "./LoginModal";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
    <Nav className="nav-bar title justify-content-center">CITY RESOURCES </Nav>

       <Nav className="nav-bar justify-content-center">
      <Nav.Item>
        
        <Nav.Link className="nav-links" href="#">
          <Link1 className="nav-links" to="AboutPage" spy={true} duration={500}>
            ABOUT
          </Link1>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-links" href="#">
          <Link1
            className="nav-links"
            to="ContactSection"
            spy={true}
            duration={500}
          >
            CONTACT
          </Link1>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">
          <LoginModal />
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    /* 
      <div className="nav-container">
      <div class="top-nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <a className="title" href="#home"><p>City Resources</p></a>  
  
  <a href="# ">ABOUT</a>
  <a href="# ">CONTACT</a> 
  
  <div class="top-nav-right">
   
    <a href="#"><LoginModal/></a>
  </div>
</div>
      </div> */
  );
};

export default TopNav;

