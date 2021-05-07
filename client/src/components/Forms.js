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
                href="https://www.pdffiller.com/jsfiller-desk14/?requestHash=2c631acd4662c43a0456870cce6e8a556133086eabb52cba978f9f9f578eae28&projectId=703257778&loader=tips#9e61439ab93b41339a4f4c2f4fbd7021"
                className="sd-link"
                target="_blank"
              >
                <h1>Disabled Parking</h1>
              </a>
            </div>

            <div className="sd-search-results">
              <a
                href="https://www.uwmedicine.org/sites/stevie/files/2021-03/Financial-Assistance-Application-English.pdf"
                className="sd-link"
                target="_blank"
              >
                <h1>Hospital Financial Assistance Form</h1>
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
