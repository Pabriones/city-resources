import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "../../src/css/TopNavHpDark.css";
import { SuitHeart } from "react-bootstrap-icons";
import { Link as Link1 } from "react-router-dom";
import { Link } from 'react-router-dom';

function TopNavHpDark() {
  return (
    <div>
      <Container className="TopNavContainer-dark">
        <Navbar expand="lg" variant="light">
          <Navbar.Brand href="/homepage" className="navTitle-dark">
            <h1>CITY RESOURCES</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggleNav"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <Link to="/userprofile"> My Favorites</Link>
                {/* <a href="#login" className="nav-links favs-dark">
                  <SuitHeart size={30} color="red" /> My Favorites
                </a>{" "} */}
                <br />
                <p>
                  {" "}
                  Signed in as:{" "}
                  <Link1
                    className="nav-links user-logged-dark"
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
    </div>
  );
}

export default TopNavHpDark;
