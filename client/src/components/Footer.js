import React from "react";
import "../../src/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-container">
        <div className="row">
          {/* Column1 */}
          <div className="col-sm">
            <div className="ft-text">
              CITY <br />
              RESOURCES
            </div>
          </div>
          {/* Column2 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <a href=" " className="ft-link">
                    {" "}
                    HOME{" "}
                  </a>
                </li>
              </div>

              <div className="ft-text">
                {" "}
                <li>
                  <a href=" " className="ft-link">
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
                  <a href=" " className="ft-link">
                    {" "}
                    ABOUT{" "}
                  </a>
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
