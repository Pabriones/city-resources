import React from "react";
import "../../src/css/Footer.css";
import { Link as Link2 } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
        <div className="row">
          <div className="col-sm">
            <div className="ft-text">
              <a href="/LandingPage" className="ft-link-logo">
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
                  <Link2
                    className="ft-link"
                    to="LandingPage"
                    spy={true}
                    duration={500}
                  >
                    HOME
                  </Link2>
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
                  <Link2
                    className="ft-link"
                    to="AboutPage"
                    spy={true}
                    duration={500}
                  >
                    ABOUT
                  </Link2>
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
  );
};

export default Footer;
