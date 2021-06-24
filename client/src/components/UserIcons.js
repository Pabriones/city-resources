import "../../src/css/SearchDirectoryPage.css";

import React from "react";
import { SuitHeart, Envelope } from "react-bootstrap-icons";
import { Tooltip, OverlayTrigger, Alert } from "react-bootstrap";
import EmailShare from "react-email-share-link";

class UserIcons extends React.Component {
  render() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Add to Favorites
      </Tooltip>
    );

    const renderTooltipEnv = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Share me
      </Tooltip>
    );
    return (
      <div>
        <div className="sd-icons">
          {" "}
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <SuitHeart
              color="red"
              type="button"
              className="favorite-heart"
              size={35}
            />
          </OverlayTrigger>{" "}
          <EmailShare
            email="mickey@mouse.com"
            subject="Share this to your Friend or Family"
            body="Your message, including the link to this page"
          >
            {(link) => (
              <a href={link} data-rel="external">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltipEnv}
                >
                  <Envelope
                    type="button"
                    size={35}
                    color="black"
                    className="share-envelope"
                  />
                </OverlayTrigger>
              </a>
            )}
          </EmailShare>
        </div>
      </div>
    );
  }
}

export default UserIcons;
