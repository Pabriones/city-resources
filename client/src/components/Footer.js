import React from "react";
import "../../src/css/Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-container">
        <div className="row">
          {/* Column1 */}
          <div className="col-sm">
            <div className="ft-text">
              <a href="url" className="ft-link-logo">
                CITY <br />
                RESOURCES
              </a>
            </div>
          </div>
          {/* Column2 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                <li>
                  <Link
                    className="ft-link"
                    to="LandingPage"
                    spy={true}
                    duration={500}
                  >
                    HOME
                  </Link>
                </li>
              </div>

              <div className="ft-text">
                {" "}
                <li>
                  <a href="url" className="ft-link">
                    {" "}
                    SEARCH DIRECTORY{" "}
                  </a>
                </li>
              </div>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <Link
                    className="ft-link"
                    to="AboutPage"
                    spy={true}
                    duration={500}
                  >
                    ABOUT
                  </Link>
                </li>
              </div>

              <div className="ft-text">
                {" "}
                <li>
                  <a href=" " className="ft-link">
                    {" "}
                    CONTACT{" "}
                  </a>
                </li>
              </div>
            </ui>
          </div>
        </div>
        <div className="row">
          <p className="col-lg">
            &copy;{new Date().getFullYear()} CITYRESOURCES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
