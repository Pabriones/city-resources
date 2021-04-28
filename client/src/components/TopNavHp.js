import React from "react";
import { Nav, Row, Col, Container, Button, Navbar } from "react-bootstrap";
import "../../src/css/TopNav.css";
import {
    SuitHeart,
  } from "react-bootstrap-icons";
  
import LoginModal from "./LoginModal";
import { Link as Link1 } from "react-scroll";

function TopNavHp() {
  return (
    <Container className="TopNavContainer">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="navTitle">
          <h1>CITY RESOURCES</h1>
        </Navbar.Brand>
        <Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
        
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login" className="nav-links favs">
              <SuitHeart size={30} color= "red"/> My Favorites
                </a>  <br/>
                <p> Signed in as:{" "}
                <a href="#login" className="nav-links user-logged">
             Selina Nguyen
                </a> </p>
             
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default TopNavHp;
