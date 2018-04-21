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
        <div className="App-mission">
    		  <h1 className="App-mission-title">Our Mission</h1>
    		  <p className="App-mission-message">Our goal for myCUpool is to create an easy and straight forward
    		  method to facilitate CU student carpools that help save money, reduce environmental impacts, and
    		  encourage the creation of new friendships. Carpooling benefits users by having multiple people use
    		  one car instead of multiple, this saves money, reduces the volume of traffic, and helps the
    		  environment. It is often difficult for people to find others who share similar interests, and thus
    		  hard to find other people they would be willing to carpool with. By allowing our users to easily
    		  connect with other people whether as a passenger or a driver themselves, we facilitate this process
    		  of finding similar individuals as well as encouraging the benefits of carpooling. MyCUPool will
    		  facilitate this process of finding others looking to go to locations/events, helping save gas,
    		  reduce traffic, and help the environment.</p>
    		</div>
        <div className="App-usage">
    		  <h1 className="App-usage-title">How to use myCUpool</h1>
    		  <p className="App-usage-message">The design of the website is made to be simple and streamlined you
    		  can login or register at the top right of this page, and you will use your CU email to do so. Once
    		  you have an account and filled out the information, you can view postings by selecting an area and
    		  whether you want to see drivers/passengers/or both. You are also to make your own postings, as
    		  either a driver looking for passengers, or a passenger looking for someone to be the driver. If you
    		  are interested in contacting someone who made a posting you can use the button on their posting,
    		  which will allow you to talk with about being a passenger or if you are willing to drive them. This
    		  site is for CU students only, which means that we have limited users so we can have a closer sense
    		  of community and accountability. Each user will have a rating connected to their profile, this will
    		  show others whether they are a good driver/passenger or not, to prevent constantly tardy or
    		  unenjoyable people from continuing to make others lives harder.</p>
    		</div>
      </div>
    );
  }
}

export default Homepage;
