import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import "../../src/css/TopNavHpDark.css";
import { Bell , BoxArrowRight, HouseDoor, SuitHeart } from "react-bootstrap-icons";
import { Link as Link1 } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from '../actions/auth';

function TopNavHpDark() {
  const { account } = useSelector(({ auth }) => auth);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  useEffect(() => {
    if (account) {
      setFname(account.firstname);
      setLname(account.lastname);
    }
  }, [account]);
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
                {/* <Link to="/userprofile"> My Favorites</Link> */}
                {/* <a href="#login" className="nav-links favs-dark">
                  <SuitHeart size={30} color="red" /> My Favorites
                </a>{" "} */}
                <br />
                <div className="nav-icons-hp">
                  <SuitHeart size={35} color="red" />{" "}
                  <Bell  size={35} color="black" />{" "}
                 <a href="/homepage"> <BoxArrowRight size={35} color="black"/></a>{" "}
        
                 
                </div>
                <br />
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
                    {fname + " " + lname}
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
