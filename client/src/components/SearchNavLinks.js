import { Modal, Button } from "react-bootstrap";
import "../../src/css/SearchNavLinks.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import {
  Globe,
  Envelope,
  ArrowUpRight,
  Map,
  SuitHeart,
  SuitHeartFill,
} from "react-bootstrap-icons";

class SearchNavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }
  render() {
    return (
      <div>
        {" "}
        <div className="snav-container">
          <a
            href="https://www.ugm.org/"
            className="website-link"
            target="_blank"
          >
            <button className="website-linkBtn">
              <Globe size={25} /> Visit Website
            </button>
          </a>

          <a
            href="https://www.ugm.org/"
            className="website-link"
            target="_blank"
          >
            <button className="website-linkBtn">
              {" "}
              <ArrowUpRight size={25} /> Share
            </button>
          </a>

          <a href="#" className="website-link" target="_blank">
            <button className="website-linkBtn">
              {" "}
              <Map size={25} /> Directions
            </button>
          </a>

          <button
            className={this.state.button ? "buttonTrue" : "buttonFalse"}
            onClick={this.handleClick}
          >
            <SuitHeart size={45} />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchNavLinks;
