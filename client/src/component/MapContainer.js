import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    return (
      <Map
        className="map"
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 37.498965, lng: 127.0351 }}
      >
        <Marker position={{ lat: 37.498965, lng: 127.0351 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API
})(MapContainer);
