import React from "react";
import "../../src/css/SearchDirectoryPage.css";
import Footer from "./Footer";

let filterArray = [
  { filterName: "Clothing Assistance" },
  { filterName: "Day Centers" },
  { filterName: "Dental and Vision" },
  { filterName: "Drug and Alcohol" },
  { filterName: "Emergency and Crisis" },
  { filterName: "Employment and Training" },
  { filterName: "Encampments" },
  { filterName: "Family and Maternity" },
  { filterName: "Financial Assistance" },
  { filterName: "General Health" },
  { filterName: "HIV/AIDS" },
  { filterName: "Housing" },
  { filterName: "Hygiene" },
  { filterName: "Identification" },
  { filterName: "Immigrant and Refugee" },
  { filterName: "LGBTQIA" },
  { filterName: "Legal" },
  { filterName: "Mail" },
  { filterName: "Mental Health" },
  { filterName: "Native and Indigenous" },
  { filterName: "Pets and Service Animals" },
  { filterName: "Problem Gambling" },
  { filterName: "Seniors" },
  { filterName: "Services for People of Color" },
  { filterName: "Shelters" },
  { filterName: "Storage" },
  { filterName: "Survivor Support" },
  { filterName: "Transportation" },
  { filterName: "Veterans" },
];

const SearchDirectoryPage = () => {
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
			<a href="https://www.ugm.org/" className="sd-link" target="_blank">
                <h1>Union Gospel Mission: Men's Shelter</h1>
              </a>
              <p>Phone: 206-628-3579</p>
              <p>Address: 97 S. Main Street Seattle, WA 98104</p>
              <p>Email: info@breadoflifemission.org</p>

              <p>Monday - Friday</p>
              <p>9:30 AM - 3:00 PM</p>

              <p>
                Bread of Life Mission helps people experiencing homeless in the
                Seattle area. Bread of Life Mission is a<br />
                non-denominational, Christian, social services organization,
                which provides critically needed goods and
                <br />
                services to the homeless, poor, and needy of Washington State
                without regard to race, color, sexual
                <br />
                orientation, creed, national origin, or religion.
              </p>
            </div>

            <div className="sd-search-results">
			<a href="https://www.ugm.org/" className="sd-link" target="_blank">
                <h1>Union Gospel Mission: Men's Shelter</h1>
              </a>
              <p>Phone: (206) 323-6341</p>
              <p>Address: 1561 Alaskan Way South Seattle, WA 98134</p>
              <p>Email: info@breadoflifemission.org</p>

              <p>
                St. Martin de Porres provides safe and dignified night shelter
                for homeless men age 50 and older.
                <br />
                The shelter opened in October 1984 in response to the growing
                need for an emergency shelter for this
                <br />
                special population of elderly men who are vulnerable to the
                weather, street predators, and illness.
              </p>

              <p>
                We currently operate our full capacity of 212 men a night. The
                shelter is open 365 nights a year from 6:30
                <br />
                p.m to 7:30 a.m and during the day of medical convalescent care.
                During the winter months, we have arrangements
                <br />
                with eight local churches to provide space for an additional 34
                men a night.
              </p>
            </div>

            <div className="sd-search-results">
			<a href="https://www.ugm.org/" className="sd-link" target="_blank">
                <h1>Union Gospel Mission: Men's Shelter</h1>
              </a>
              <p>Phone: (206) 323-6341</p>
              <p>Address: 1561 Alaskan Way South Seattle, WA 98134</p>
              <p>Email: info@breadoflifemission.org</p>

              <p>
                St. Martin de Porres provides safe and dignified night shelter
                for homeless men age 50 and older.
                <br />
                The shelter opened in October 1984 in response to the growing
                need for an emergency shelter for this
                <br />
                special population of elderly men who are vulnerable to the
                weather, street predators, and illness.
              </p>

              <p>
                We currently operate our full capacity of 212 men a night. The
                shelter is open 365 nights a year from 6:30
                <br />
                p.m to 7:30 a.m and during the day of medical convalescent care.
                During the winter months, we have arrangements
                <br />
                with eight local churches to provide space for an additional 34
                men a night.
              </p>
            </div>

            <div className="sd-search-results">
              <a href="https://www.ugm.org/" className="sd-link" target="_blank">
                <h1>Union Gospel Mission: Men's Shelter</h1>
              </a>
              Phone: (206) 323-6341
              <br />
              <p>Address: 1561 Alaskan Way South Seattle, WA 98134</p>
              <p>Email: info@breadoflifemission.org</p>
              <p>
                St. Martin de Porres provides safe and dignified night shelter
                for homeless men age 50 and older.
                <br />
                The shelter opened in October 1984 in response to the growing
                need for an emergency shelter for this
                <br />
                special population of elderly men who are vulnerable to the
                weather, street predators, and illness.
              </p>
              <p>
                We currently operate our full capacity of 212 men a night. The
                shelter is open 365 nights a year from 6:30
                <br />
                p.m to 7:30 a.m and during the day of medical convalescent care.
                During the winter months, we have arrangements
                <br />
                with eight local churches to provide space for an additional 34
                men a night.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sd-btn">
        <button className="print-btn">
          <h2>PRINT RESULTS</h2>
        </button>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default SearchDirectoryPage;
