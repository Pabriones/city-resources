import React, { useEffect, useState, useRef } from "react";
import "../../src/css/SearchDirectoryPage.css";
import Footer from "./Footer";
import Print from "./Print";
import { useReactToPrint } from "react-to-print";
import {
  Globe,
  Envelope,
  ArrowUpRight,
  Map,
  SuitHeart,
  SuitHeartFill,
} from "react-bootstrap-icons";
import SearchNavLinks from "./SearchNavLinks";
import Axios from "axios";
import { Link as Link3 } from "react-router-dom";
import TopNav2 from "./TopNav2";

let filterArray = [
  { filterName: "Clothing Assistance", checked: false },
  { filterName: "Day Centers", checked: false },
  { filterName: "Dental and Vision", checked: false },
  { filterName: "Drug and Alcohol", checked: false },
  { filterName: "Emergency and Crisis", checked: false },
  { filterName: "Employment and Training", checked: false },
  { filterName: "Encampments", checked: false },
  { filterName: "Family and Maternity", checked: false },
  { filterName: "Financial Assistance", checked: false },
  { filterName: "General Health", checked: false },
  { filterName: "HIV/AIDS", checked: false },
  { filterName: "Housing", checked: false },
  { filterName: "Hygiene", checked: false },
  { filterName: "Identification", checked: false },
  { filterName: "Immigrant and Refugee", checked: false },
  { filterName: "LGBTQIA", checked: false },
  { filterName: "Legal", checked: false },
  { filterName: "Mail", checked: false },
  { filterName: "Mental Health", checked: false },
  { filterName: "Native and Indigenous", checked: false },
  { filterName: "Pets and Service Animals", checked: false },
  { filterName: "Problem Gambling", checked: false },
  { filterName: "Seniors", checked: false },
  { filterName: "Services for People of Color", checked: false },
  { filterName: "Shelters", checked: false },
  { filterName: "Storage", checked: false },
  { filterName: "Survivor Support", checked: false },
  { filterName: "Transportation", checked: false },
  { filterName: "Veterans", checked: false },
];

// const handleChange = e => {
//   const { name, value } = e.target;
//   setState(prevState => ({
//     ...prevState,
//     [name]: value
//   }));
// };

const SearchDirectoryPage = () => {
  const [state, setState] = useState(filterArray);
  const [resource, setResource] = useState([]);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleCheckBox = (e, i) => {
    let toFetch = [];
    {
      state.map((filter, index) => {
        if (index === i) {
          filter.checked = !filter.checked;
        }
        if (filter.checked === true) {
          toFetch.push(filter.filterName);
        }
      });
    }
    setState([...state]);
    handleRequest(toFetch);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      const filteredItems = state.filter((item) => {
        return (
          item.filterName
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) !== -1
        );
      });
      setState(filteredItems);
    } else {
      setState(filterArray);
    }
  };

  const handleRequest = (data) => {
    Axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    Axios.post("http://localhost:8080/api/getFilterData", {
      category: data,
    }).then((res) => {
      if (res.data.success) {
        setResource(res.data.data);
      }
    });
  };

  useEffect(() => {
    handleRequest([]);
  }, []);

  let toPrint = [];

  return (
    <body>
      <TopNav2 />
      <div className="sd-container">
        <div className="row filter">
          {/* Col 1 */}
          <div className="col-6 p main sd-filterContainer">
            <div className="sd-searchBar">
              <input
                placeholder="What are you looking for?"
                type="text"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <h2 className="mb-0">FILTER BY SERVICES:</h2>
            <div className="input-section">
              {state.map((filter, i) => {
                let temp = [];
                temp.push(
                  <div className="sd-services">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={(e) => handleCheckBox(e, i)}
                      checked={filter.checked}
                    />
                    <label> {filter.filterName}</label>
                  </div>
                );
                return temp;
              })}
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-6 sd-results-container scroll">
            <div className="sd-search-results">
              <SearchNavLinks />
              <Print ref={componentRef} data={resource} />
            </div>
          </div>
        </div>
        <div className="sd-btn">
          <button className="print-btn" onClick={handlePrint}>
            <h2>PRINT RESULTS</h2>
          </button>
          <p>
            Want to save your favorites and share by email?{" "}
            <Link3
              className="sd-rp-link"
              to="/register"
              spy={true}
              duration={500}
            >
              Create an account!
            </Link3>
          </p>
        </div>{" "}
      </div>
      <div>
        <Footer />
      </div>
    </body>
  );
};

export default SearchDirectoryPage;
