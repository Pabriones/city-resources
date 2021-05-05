import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "../../src/css/TopNavHpDark.css";
import { SuitHeart } from "react-bootstrap-icons";
import { Link as Link1 } from "react-router-dom";

function TopNavHp() {
  return (
    <Container className="TopNavContainer">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/" className="navTitleHp">
          <h1>CITY RESOURCES</h1>
        </Navbar.Brand>
        <Navbar.Toggle className="toggleNav" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login" className="nav-links favs">
                <SuitHeart size={30} color="red" /> My Favorites
              </a>{" "}
              <br />
              <p>
                {" "}
                Signed in as:{" "}
                <Link1
                  className="nav-links user-logged"
                  to="/userprofile"
                  spy={true}
                  duration={500}
                >
                  Selina Nguyen
                </Link1>
              </p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default TopNavHp;
