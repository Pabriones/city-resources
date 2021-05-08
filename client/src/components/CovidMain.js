import React from "react";
import {
  Tab,
  Row,
  Col,
  Nav,
  Form,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import { Justify } from "react-bootstrap-icons";
import "../../src/css/CovidMain.css";

class CovidMain extends React.Component {
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
        <Accordion defaultActiveKey="0">
          <Card className="accordion-up-covid">
            <Card.Header className="accordion-header-covid">
            <Row>   
               <Col><h3>
                  For the most update information about COVID-19, please visit
                  the{" "}
                  <a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                    className="lp-jumbo-link"
                  >
                    CDC Website
                  </a>
                  .
                </h3>
             </Col> 
                  <Col>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" 
                    className={this.state.button ? "openTrue" : "closeFalse"}
                    onClick={this.handleClick}>
                      <Justify size={55} />
                    </Accordion.Toggle>{" "}</Col>
              </Row>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="vaccine-info-container">
                <p>
                  {" "}
                  <h4>Vaccine appointments are available!</h4>
                  King County:{" "}
                  <a
                    href="https://seattle.signetic.com/home/93d64636-e4a2-eb11-b1ac-002248089768"
                    className="lp-jumbo-link"
                  >
                    Schedule an appointment
                  </a>
                  <br />
                  General vaccine locator:{" "}
                  <a
                    href="https://vaccinelocator.doh.wa.gov/"
                    className="lp-jumbo-link"
                  >
                    Find an appointment
                  </a>{" "}
                  <br /> <br />
                  <a
                    href="https://kingcounty.gov/depts/health/covid-19/~/media/depts/health/communicable-diseases/documents/C19/COVID-19-testing-locations.ashx"
                    className="lp-jumbo-link"
                  >
                    Free Covid-19 testing sites
                  </a>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default CovidMain;

// function CovidMain() {
//   return (
//     <div>
//       <Accordion defaultActiveKey="0">
//         <Card className="accordion-up-covid">
//           <Card.Header className="accordion-header-covid">
//             <p>
//               <h3>
//                 For the most update information about COVID-19, please visit the{" "}
//                 <a
//                   href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
//                   className="lp-jumbo-link"
//                 >
//                   CDC Website
//                 </a>
//                 .
//               </h3>
//               <Accordion.Toggle
//                 as={Button}
//                 variant="link"
//                 eventKey="0"
//                 className="accordion-edit-covid"
//               >
//                 {" "}
//                 <ArrowRightCircle size={55} />
//                 {/* <button className="edit-btn">EDIT</button> */}
//               </Accordion.Toggle>
//             </p>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>
//               <p>
//                 {" "}
//                 <h4>Vaccine appointments are available!</h4>
//                 King County:{" "}
//                 <a
//                   href="https://seattle.signetic.com/home/93d64636-e4a2-eb11-b1ac-002248089768"
//                   className="lp-jumbo-link"
//                 >
//                   Schedule an appointment
//                 </a>
//                 <br />
//                 General vaccine locator:{" "}
//                 <a
//                   href="https://vaccinelocator.doh.wa.gov/"
//                   className="lp-jumbo-link"
//                 >
//                   Find an appointment
//                 </a>{" "}
//                 <br /> <br />
//                 <a
//                   href="https://kingcounty.gov/depts/health/covid-19/~/media/depts/health/communicable-diseases/documents/C19/COVID-19-testing-locations.ashx"
//                   className="lp-jumbo-link"
//                 >
//                   Free Covid-19 testing sites
//                 </a>
//               </p>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     </div>
//   );
// }

// export default CovidMain;
