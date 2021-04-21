import React, {useState} from "react";
import "../../src/css/SearchDirectoryPage.css";
import Footer from "./Footer";
import Axios from "axios";

let filterArray = [
  { filterName: "Clothing Assistance",
  checked:true
  },
  { filterName: "Day Centers",
    checked:false },
  { filterName: "Dental and Vision" ,
    checked:false},
  { filterName: "Drug and Alcohol",
    checked:false },
  { filterName: "Emergency and Crisis" ,
    checked:false},
  { filterName: "Employment and Training",
    checked:false },
  { filterName: "Encampments" ,
    checked:false},
  { filterName: "Family and Maternity",
    checked:false },
  { filterName: "Financial Assistance",
    checked:false },
  { filterName: "General Health",
    checked:false },
  { filterName: "HIV/AIDS" ,
    checked:false},
  { filterName: "Housing",
    checked:false },
  { filterName: "Hygiene",
    checked:false },
  { filterName: "Identification",
    checked:false },
  { filterName: "Immigrant and Refugee" ,
    checked:false},
  { filterName: "LGBTQIA" ,
    checked:false},
  { filterName: "Legal",
    checked:false },
  { filterName: "Mail" ,
    checked:false},
  { filterName: "Mental Health" ,
    checked:false},
  { filterName: "Native and Indigenous",
    checked:false },
  { filterName: "Pets and Service Animals",
    checked:false },
  { filterName: "Problem Gambling",
    checked:false },
  { filterName: "Seniors" ,
    checked:false},
  { filterName: "Services for People of Color",
    checked:false },
  { filterName: "Shelters",
    checked:false },
  { filterName: "Storage" ,
    checked:false},
  { filterName: "Survivor Support" ,
    checked:false},
  { filterName: "Transportation",
    checked:false },
  { filterName: "Veterans" ,
    checked:false},
];

// const handleChange = e => {
//   const { name, value } = e.target;
//   setState(prevState => ({
//     ...prevState,
//     [name]: value
//   }));
// };

const SearchDirectoryPage = () => {

  const [state, setState] = useState([
      { filterName: "Clothing Assistance",
        checked:false
      },
      { filterName: "Day Centers",
        checked:false },
      { filterName: "Dental and Vision" ,
        checked:false},
      { filterName: "Drug and Alcohol",
        checked:false },
      { filterName: "Emergency and Crisis" ,
        checked:false},
      { filterName: "Employment and Training",
        checked:false },
      { filterName: "Encampments" ,
        checked:false},
      { filterName: "Family and Maternity",
        checked:false },
      { filterName: "Financial Assistance",
        checked:false },
      { filterName: "General Health",
        checked:false },
      { filterName: "HIV/AIDS" ,
        checked:false},
      { filterName: "Housing",
        checked:false },
      { filterName: "Hygiene",
        checked:false },
      { filterName: "Identification",
        checked:false },
      { filterName: "Immigrant and Refugee" ,
        checked:false},
      { filterName: "LGBTQIA" ,
        checked:false},
      { filterName: "Legal",
        checked:false },
      { filterName: "Mail" ,
        checked:false},
      { filterName: "Mental Health" ,
        checked:false},
      { filterName: "Native and Indigenous",
        checked:false },
      { filterName: "Pets and Service Animals",
        checked:false },
      { filterName: "Problem Gambling",
        checked:false },
      { filterName: "Seniors" ,
        checked:false},
      { filterName: "Services for People of Color",
        checked:false },
      { filterName: "Shelters",
        checked:false },
      { filterName: "Storage" ,
        checked:false},
      { filterName: "Survivor Support" ,
        checked:false},
      { filterName: "Transportation",
        checked:false },
      { filterName: "Veterans" ,
        checked:false},
    ]);
  const [resource,setResource] = useState([]);

  const handleCheckBox = (e,i) => {
    let toFetch=[];
    {state.map((filter, index) => {

      if(index === i){
        filter.checked = !filter.checked;
      }
      if(filter.checked === true){
        toFetch.push(filter.filterName)
      }
    })}
    setState([...state]);
    handleRequest(toFetch);

  };

  const handleRequest=(data)=>{
    console.log('in this');
    Axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  Axios.post("http://localhost:8080/api/getFilterData", {
    category: data
  }).then((res) => {
    console.log(res);
    if(res.data.success){
      setResource(res.data.data);
    }
    // if (res.data.status === "1") {
    //   setSuccessModalMsg(res.data.message);
    //   setIsSuccessModalOpen(true);
    // }
  });
};

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
            {state.map((filter, i) => {
              let temp = [];
              temp.push(<div className="sd-services">
                <input type="checkbox" className="checkbox" onChange={(e)=>handleCheckBox(e,i)} checked={filter.checked}/>
                <label> {filter.filterName}</label>
              </div>);
              return (temp);
            })}
          </div>
        </div>

        {/* Col 2 */}
        <div className="col-6 p-main sd-results-container scroll">
          <div className="sd-search-results">
              {resource.map((filter, i) => {
                console.log(resource);
                let temp = [];
                temp.push(<div className="sd-search-results">
                  <a href="https://www.ugm.org/" className="sd-link" target="_blank">
                    <h1>{filter.name}</h1>
                  </a>
                  <p>Phone: {filter.phone}</p>
                  <p>Address: {filter.address}</p>
                  <p>Email: {filter.email}</p>

                  <p>{filter.operationHours}</p>
                  {/*<p>9:30 AM - 3:00 PM</p>*/}

                  <p>
                    {filter.description}
                  </p>
                </div>);
                return (temp);
              })}
            {/*<div className="sd-search-results">
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
            </div>*/}
          </div>
        </div>
      </div>
      <div className="sd-btn">
        <button className="print-btn" onClick={()=>handleRequest()}>
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