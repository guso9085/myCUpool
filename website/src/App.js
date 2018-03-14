import PropTypes from 'prop-types'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">my<span style={{color:'#CFB584'}}>CU</span>pool</h1>
          <a href="">
            <h1 className="App-register">Register</h1>
          </a>
          <a href="">
            <h1 className="App-login">Login</h1>
          </a>
        </header>
        <CustomComponent />
        <div className="App-divider"></div>
        <div className="App-mission"></div>
        <div className="App-footer">
          <h1 className="App-disclaimer-title">my<span style={{color:'#CFB584'}}>CU</span>pool</h1>
          <p className= "App-disclaimer">is not responsible for any issues caused by the use of our application</p>
        </div>
      </div>
    );
  }
}

export default App;
