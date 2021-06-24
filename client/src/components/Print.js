import React, { Component, state, toggle } from "react";
import "../../src/css/Print.css";
import Popup from "reactjs-popup";
import ReactModal from "react-modal";
import MapContainer from "../components/map";
import "reactjs-popup/dist/index.css";
import { SuitHeart, Envelope } from "react-bootstrap-icons";
import { Tooltip, OverlayTrigger, Alert } from "react-bootstrap";
import EmailShare from "react-email-share-link";
import UserIcons from "./UserIcons";

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      currentAddress: "",
      currentLat: 0,
      currentLon: 0,
    };
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ data: nextProps.data });
  }
  // Modal = () => (
  //     <Popup trigger={<button className="button"> Open Modal </button>} onClose={false} modal>
  //       <div style={{height:'500px'}}>
  //         <MapContainer/>
  //       </div>
  //     </Popup>
  // );
  closeModal = () => {
    this.setState({
      open: false,
      currentAddress: "",
      currentLat: 0,
      currentLon: 0,
    });
  };
  openModal = (data, lat, lon) => {
    this.setState({
      open: true,
      currentAddress: data,
      currentLat: lat,
      currentLon: lon,
    });
  };

  Modal = () => (
    <ReactModal
      isOpen={this.state.open}
      contentLabel="Minimal Modal Example"
      shouldCloseOnEsc={true}
      onRequestClose={() => this.closeModal.bind(this)}
      style={{
        overlay: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          position: "absolute",
          // top: '200px',
          left: "200px",
          right: "200px",
          // bottom: '200px',
          // border: '1px solid #ccc',
          background: "#fff",
          // overflow: 'auto',
          // WebkitOverflowScrolling: 'touch',
          // borderRadius: '4px',
          // outline: 'none',
          // padding: '20px'
        },
      }}
      // preventScroll={true}
    >
      <div style={{ float: "left" }}>Address - {this.state.currentAddress}</div>
      <div style={{ paddingLeft: "99%" }}>
        <button onClick={this.closeModal.bind(this)}> &#10006; </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <MapContainer
          lat={this.state.currentLat}
          lon={this.state.currentLon}
          address={this.state.currentAddress}
        />
      </div>
    </ReactModal>
  );

  render() {
    let data = this.state.data;

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
      <p>
        {this.Modal()}
        {data
          ? data.map((filter, i) => {
              let toPrint = [];
              let phoneNumber = "tel:" + filter.phone;
              toPrint.push(
                <div className="sd-search-results-print">
                  <div class="container usr-icons-print">
                    <div class="row">
                      <div class="col-sm prnt">
                        <p>{filter.name}</p>
                      </div>

                      <div class="col-sm user-icons-prnt">
                        <UserIcons />
                      </div>
                    </div>
                  </div>

                  {/* <div className="sd-icons">  <OverlayTrigger
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
                              className="share-envelope"
                            />
                          </OverlayTrigger>
                        </a>
                      )}
                    </EmailShare></div>  */}

                  <div class="container site-info">
                    <div class="row">
                      <div class="col ">Website :</div>

                      <div class="col  website-link">
                        <a href={filter.website}>
                          <p> {filter.website}</p>
                        </a>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col ">Phone :</div>

                      <div class="col  website-link">
                        <p>
                          <a href={phoneNumber}>{filter.phone}</a>
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col ">Address:</div>

                      <div class="col  address-link">
                        <p>
                          <div
                            onClick={this.openModal.bind(
                              this,
                              filter.address,
                              filter.latitude,
                              filter.longitude
                            )}
                          >
                            {filter.address}
                          </div>
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col ">Email:</div>

                      <div class="col  website-link ">
                        {" "}
                        <p> {filter.email}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        {filter.operationDays ? filter.operationDays : ""}{" "}
                      </div>
                      <br />
                      <div class="col website-link">
                        <p>
                          {" "}
                          {filter.operationHours ? filter.operationHours : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/*<p>9:30 AM - 3:00 PM</p>*/}
                  <div className="site-description">
                    {" "}
                    <p>{filter.description}</p>
                  </div>
                </div>
              );
              return toPrint;
            })
          : null}
      </p>
    );
  }
}

export default Print;
