import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper,Polygon} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:this.props.address,
            lat:this.props.lat,
            lon:this.props.lon,
        }
    }
    render() {

        return (
            <div style={{height:'100px'}}>

               <Map  google={this.props.google}
                  zoom={14}
                  initialCenter={{
                      lat: this.state.lat,
                      lng: this.state.lon
                  }}
            >
                <Marker
                    title={this.state.title}
                    name={this.state.title}
                    position={{lat: this.state.lat, lng: this.state.lon}}
                />
                {/*<Marker*/}
                {/*    title ={'thisss'}*/}
                {/*    name={'Your position'}*/}
                {/*    position={{lat: 37.762391, lng: -122.439192}}*/}
                {/*    />*/}
                {/*<Marker onClick={this.onMarkerClick}*/}
                {/*        name={'Current location'} />*/}

                <InfoWindow >
                  <div>
                    <h1>{this.state.title}</h1>
                  </div>
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBAvjVHRRmioHwNTsL6J7HNH5JKgFYhKKM')
})(MapContainer)

