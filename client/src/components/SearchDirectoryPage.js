import React from "react";
import "../../src/css/SearchDirectoryPage.css";
import Footer from "./Footer";
import { Globe, Envelope, ArrowUpRight, Map, SuitHeart, SuitHeartFill } from "react-bootstrap-icons";
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
        <div className="col-6 sd-results-container scroll">
          <div className="sd-search-results">
            <div className="sd-search-results">
              <h1>Union Gospel Mission: Men's Shelter</h1>

              <a
                href="https://www.ugm.org/"
                className="website-link"
                target="_blank"
              >
               <button className="website-linkBtn">
                  {" "}
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

              <a
                href="https://www.ugm.org/"
                className="website-link"
                target="_blank"
              >
               <button className="website-linkBtn">
                  {" "}
                 <Map size={25} /> Directions 
                </button>
              </a>

            
               <button className="fav-icon">
                  {" "}
                 <SuitHeart size={45} /> 
                </button>
              


              <p>
                <b>Phone:</b> 206-628-3579
                <br />
                <b>Address:</b> 97 S. Main Street Seattle, WA 98104
                <br />
                <b>Email:</b> info@breadoflifemission.org
              </p>

              <p>
                <b>Monday - Friday</b>
                <br />
                9:30 AM - 3:00 PM
              </p>

              <p>
                Bread of Life Mission helps people experiencing homeless in the
                Seattle area. Bread of Life Mission is a non-denominational,
                Christian, social services organization, which provides
                critically needed goods and services to the homeless, poor, and
                needy of Washington State without regard to race, color, sexual
                orientation, creed, national origin, or religion.
              </p>

              <p>
                <b>Eligibiity:</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                quam aliquam, sodales ante id, porta odio. Curabitur tincidunt
                tristique mauris quis placerat. Curabitur sit amet egestas ante,
                a efficitur sem.
              </p>
            </div>

            <div className="sd-search-results">
            <h1>Union Gospel Mission: Men's Shelter</h1>

<a
  href="https://www.ugm.org/"
  className="website-link"
  target="_blank"
>
 <button className="website-linkBtn">
    {" "}
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

<p>
  <b>Phone:</b> 206-628-3579
  <br />
  <b>Address:</b> 97 S. Main Street Seattle, WA 98104
  <br />
  <b>Email:</b> info@breadoflifemission.org
</p>

<p>
  <b>Monday - Friday</b>
  <br />
  9:30 AM - 3:00 PM
</p>

<p>
  Bread of Life Mission helps people experiencing homeless in the
  Seattle area. Bread of Life Mission is a non-denominational,
  Christian, social services organization, which provides
  critically needed goods and services to the homeless, poor, and
  needy of Washington State without regard to race, color, sexual
  orientation, creed, national origin, or religion.
</p>

<p>
  <b>Eligibiity:</b>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
  quam aliquam, sodales ante id, porta odio. Curabitur tincidunt
  tristique mauris quis placerat. Curabitur sit amet egestas ante,
  a efficitur sem.
</p>
            </div>

            <div className="sd-search-results">
            <h1>Union Gospel Mission: Men's Shelter</h1>

<a
  href="https://www.ugm.org/"
  className="website-link"
  target="_blank"
>
 <button className="website-linkBtn">
    {" "}
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

<p>
  <b>Phone:</b> 206-628-3579
  <br />
  <b>Address:</b> 97 S. Main Street Seattle, WA 98104
  <br />
  <b>Email:</b> info@breadoflifemission.org
</p>

<p>
  <b>Monday - Friday</b>
  <br />
  9:30 AM - 3:00 PM
</p>

<p>
  Bread of Life Mission helps people experiencing homeless in the
  Seattle area. Bread of Life Mission is a non-denominational,
  Christian, social services organization, which provides
  critically needed goods and services to the homeless, poor, and
  needy of Washington State without regard to race, color, sexual
  orientation, creed, national origin, or religion.
</p>

<p>
  <b>Eligibiity:</b>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
  quam aliquam, sodales ante id, porta odio. Curabitur tincidunt
  tristique mauris quis placerat. Curabitur sit amet egestas ante,
  a efficitur sem.
</p>
            </div>

            <div className="sd-search-results">
            <h1>Union Gospel Mission: Men's Shelter</h1>

<a
  href="https://www.ugm.org/"
  className="website-link"
  target="_blank"
>
 <button className="website-linkBtn">
    {" "}
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

<p>
  <b>Phone:</b> 206-628-3579
  <br />
  <b>Address:</b> 97 S. Main Street Seattle, WA 98104
  <br />
  <b>Email:</b> info@breadoflifemission.org
</p>

<p>
  <b>Monday - Friday</b>
  <br />
  9:30 AM - 3:00 PM
</p>

<p>
  Bread of Life Mission helps people experiencing homeless in the
  Seattle area. Bread of Life Mission is a non-denominational,
  Christian, social services organization, which provides
  critically needed goods and services to the homeless, poor, and
  needy of Washington State without regard to race, color, sexual
  orientation, creed, national origin, or religion.
</p>

<p>
  <b>Eligibiity:</b>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
  quam aliquam, sodales ante id, porta odio. Curabitur tincidunt
  tristique mauris quis placerat. Curabitur sit amet egestas ante,
  a efficitur sem.
</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sd-btn">
        <button className="print-btn">
          <h2>PRINT AND SHARE LIST</h2>
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
