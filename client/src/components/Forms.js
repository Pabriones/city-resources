import React from "react";
import "../../src/css/SearchDirectoryPage.css";
import Footer from "./Footer";

let filterArray = [{ filterName: "Parking" }];

const Forms = () => {
  return (
    <div className="sd-container">
      {/* Row 1 */} <div className="sd-title">CITY RESOURCES </div>
      <div className="row hero">
        {/* Col 1 */}
        <div className="col-6 p main sd-filterContainer">
          <div className="sd-searchBar">
            <input placeholder="What are you looking for?" type="text" />
          </div>
          <h2 className="mb-0">FILTER BY SERVICES:</h2>
          <div className="input-section">
            {filterArray.map((filter, i) => {
              return (
                <div className="sd-services">
                  <input type="checkbox" className="checkbox" />
                  <label> {filter.filterName}</label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Col 2 */}
        <div className="col-6 p-main sd-results-container scroll">
          <div className="sd-search-results">
            <div className="sd-search-results">
              <a
                href="https://www.ugm.org/"
                className="sd-link"
                target="_blank"
              >
                <h1>Disabled Parking</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Forms;
