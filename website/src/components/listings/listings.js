import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import './listings.css';

class Listings extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div className="Login-wrapper">
          <AppBar title="Listings" showMenuIconButton={false} className="appBar" />
          </div>
          <Link to="/newlisting">
            <div className="newListing">+</div>
          </Link>
      </MuiThemeProvider>
    );
  }
}

export default Listings;
