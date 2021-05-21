import React from "react";
import "../../src/css/Footer.css";
import { Link as Link1 } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-container">
        <div className="row">
          {/* Column1 */}
          <div className="col-sm">
            <div className="ft-text">
              <Link1 className="ft-link-logo" to="/" spy={true} duration={500}>
                CITY <br /> RESOURCES
              </Link1>
            </div>
          </div>
          {/* Column2 */}

          {/* <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <Link1 className="ft-link" to="/" spy={true} duration={500}>
                    search
                  </Link1>
                </li>
              </div>
              <div className="ft-text">
                {" "}
                <li>
                  <Link1 className="ft-link" to="/" spy={true} duration={500}>
                    CONTACT
                  </Link1>
                </li>
              </div>
            </ui>
          </div> */}

          {/* Column3 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <Link1
                    className="ft-link"
                    to="/directory"
                    spy={true}
                    duration={500}
                  >
                    {" "}
                    SEARCH DIRECTORY{" "}
                  </Link1>
                </li>
              </div>
              <div className="ft-text">
                <li>
                  <Link1
                    className="ft-link"
                    to="/addresource"
                    spy={true}
                    duration={500}
                  >
                    ADD YOUR RESOURCE
                  </Link1>
                </li>
              </div>
            </ui>
          </div>

          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <Link1
                    className="ft-link"
                    to="/forms"
                    spy={true}
                    duration={500}
                  >
                    FORMS
                  </Link1>
                </li>
              </div>
            </ui>
          </div>  
          
   
        </div>
        {/* <div className="col-sm">
            &copy;{new Date().getFullYear()} CITYRESOURCES
          </div> */}
      </div>
    </div>
  );
};

export default Footer;