import React, { Component } from "react";
import "../../src/css/SearchDirectoryPage.css";
import Popup from 'reactjs-popup';
import ReactModal from 'react-modal';
import MapContainer from '../components/map'
import 'reactjs-popup/dist/index.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper,Polygon} from 'google-maps-react';
class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open:false,
        currentAddress:'',
        currentLat:0,
        currentLon:0,
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
      this.setState({open:false,currentAddress:'',currentLat:0,currentLon:0})
  };
  openModal = (data,lat,lon) => {
      this.setState({open:true,currentAddress:data,currentLat:lat,currentLon:lon})
  };

  Modal = () => (
          <ReactModal
            isOpen={this.state.open}
            contentLabel="Minimal Modal Example"
            shouldCloseOnEsc={true}
            onRequestClose={() => this.closeModal.bind(this)}
            style={{
              overlay: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content: {
                position: 'absolute',
                // top: '200px',
                left: '200px',
                right: '200px',
                // bottom: '200px',
                // border: '1px solid #ccc',
                background: '#fff',
                // overflow: 'auto',
                // WebkitOverflowScrolling: 'touch',
                // borderRadius: '4px',
                // outline: 'none',
                // padding: '20px'
              }
            }}
            // preventScroll={true}
        >
                  <div style={{float: 'left'}}>
                      Address - {this.state.currentAddress}
                  </div>
                  <div style={{paddingLeft:'99%'}}>
                      <button onClick={this.closeModal.bind(this)}> &#10006; </button>
                  </div>
                  <div style={{marginTop:'10px'}}>
                     <MapContainer lat={this.state.currentLat} lon={this.state.currentLon} address={this.state.currentAddress}/>
                  </div>

        </ReactModal>
  );


  render() {
    let data = this.state.data;
    return (
      <p>
        {this.Modal()}
        {data
          ? data.map((filter, i) => {
              let toPrint = [];
              let phoneNumber = "tel:"+filter.phone;
              toPrint.push(
                <div className="sd-search-results">
                  <h1>{filter.name}</h1>
                   <p>Website : <a href={filter.website}> {filter.website}</a></p>
                  <p>Phone: <a href={phoneNumber}>{filter.phone}</a></p>
                  <p style={{textDecoration: 'underline',cursor: 'pointer'}} onClick={this.openModal.bind(this,filter.address,filter.latitude,filter.longitude)}>Address: <u>{filter.address}</u></p>
                  <p>Email: {filter.email}</p>
                  <p>Operation Days:{(filter.operationDays)?filter.operationDays:''}</p>
                  <p>Operation Hours:{(filter.operationHours)?filter.operationHours:''}</p>

                  {/*<p>9:30 AM - 3:00 PM</p>*/}

                  <p>{filter.description}</p>
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
