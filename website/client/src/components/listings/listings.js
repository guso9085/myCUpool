import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './listings.css';

class Listings extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div className="Login-wrapper">
          <AppBar title="Listings" showMenuIconButton={false} className="appBar" />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Listings;
