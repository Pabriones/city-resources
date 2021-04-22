import React from "react";
import {
  Globe,
  Envelope,
  ArrowUpRight,
  Map,
  SuitHeart,
  SuitHeartFill,
} from "react-bootstrap-icons";

function SearchNavLinks() {
  return (
    <div>
      <a href="https://www.ugm.org/" className="website-link" target="_blank">
        <button className="website-linkBtn">
          {" "}
          <Globe size={25} /> Visit Website
        </button>
      </a>

      <a href="https://www.ugm.org/" className="website-link" target="_blank">
        <button className="website-linkBtn">
          {" "}
          <ArrowUpRight size={25} /> Share
        </button>
      </a>

      <a href="https://www.ugm.org/" className="website-link" target="_blank">
        <button className="website-linkBtn">
          {" "}
          <Map size={25} /> Directions
        </button>
      </a>

      <button className="fav-icon">
        {" "}
        <SuitHeart size={45} />
      </button>
    </div>
  );
}

export default SearchNavLinks;
