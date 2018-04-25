import PropTypes from 'prop-types'
import React, { Component } from 'react';
import './homePage.css';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  PropTypes as MapPropTypes,
} from 'react-leaflet'

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)
MyPopupMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
}

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired,
}

class CustomComponent extends Component {
  state = {
    lat: 40.007581,
    lng: -105.265942,
    zoom: 14,
  }

  render() {
    const center = [this.state.lat, this.state.lng]

    const markers = [
      { key: 'marker1', position: [51.5, -0.1], children: 'My first popup' },
      { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
      { key: 'marker3', position: [51.49, -0.05], children: 'My third popup' },
    ]
    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    )
  }
}

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <CustomComponent />
        <div className="App-divider"></div>
        <div className="lander-laptop">
          <div className="laptop"></div>
          <div className="laptop-info-1">
            <p className="info-center">Carpool with fellow CU students. We require a colorado.edu email to register!</p>
          </div>
          <div className="laptop-info-2">
            <p className="info-center">Looking for a ride? Make a new post as a rider with all of your personalized preferences.</p>
          </div>
          <div className="laptop-info-3">
            <p className="info-center">Going to be driving to a public event? Make a new post as a driver. Make friends and save gas money.</p>
          </div>
          <div className="laptop-info-4">
            <p className="info-center">Learn more about who your riding with by accessing their user profile! Make sure to fill yours out!</p>
          </div>
        </div>
        <div className="App-divider"></div>
        <div className="App-mission">
    		  <h1 className="App-mission-title">Mission Statement</h1>
    		  <p className="App-mission-message">Our goal for myCUpool is to create an easy and straight forward
    		  method to facilitate CU student carpools that help save money, reduce environmental impacts, and
    		  encourage the creation of new friendships. Carpooling benefits users by having multiple people use
    		  one car instead of multiple, this saves money, reduces the volume of traffic, and helps the
    		  environment. It is often difficult for people to find others who share similar interests, and thus
    		  hard to find other people they would be willing to carpool with. It is as easy as registering with a verified colorado.edu
          email, logging in, and proceeding to find a post that fits your needs or make either a rider or driver request on the listings page. Students will be provided
          Students will have access to your chosen method of contact and contact you if there's a fit! It's that easy!</p>
    		</div>
      </div>
    );
  }
}

export default Homepage;
