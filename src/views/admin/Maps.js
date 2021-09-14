import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";

// components

class Maps extends React.Component {
  render() {
  return (
    <div id="map">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">

          </div>
        </div>
      </div>
    
    <div className="App">

      <Map google={this.props.google} zoom={14} initialCenter={{
            lat: 47.508124,
            lng: 19.094384
          }}>
 
        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />


      </Map>
    </div>
    </div>
  );
}
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDCer1D_MBlTy46px9Wom3ZLj4tq9RlPLI")
})(Maps)