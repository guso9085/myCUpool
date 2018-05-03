import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import './listings.css';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.xyz = JSON.parse(localStorage.xyz)
  }

  
  /*var items = [] {
    return <div className="listing">
                <div className="destination">Destination: {this.xyz.destination} </div>
                <div className="name">Name: {this.xyz.firstName}{this.xyz.lastName}</div>
                <div className="contact">Contact: {this.xyz.contact}</div>
                <div className="date">Date: {this.xyz.date}</div>
                <div className="gasFee">Gas Fee: {this.xyz.gasFee}$</div>
                <div className="role">{this.xyz.role}</div>
           </div>;
  });
  */
  render() {
    return (
      <MuiThemeProvider>
          <AppBar title="Listings" showMenuIconButton={false} className="appBar" />
            <div className="listings">
              <div className="listing">
                <div className="destination">Destination: Vail </div>
                <div className="name">Name: Donald Trump</div>
                <div className="contact">Contact: 911-911-9111</div>
                <div className="date">Date: 5/3/18</div>
                <div className="gasFee">Gas Fee: $5.00</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Stadium</div>
                <div className="name">Name: Donald Lump</div>
                <div className="contact">Contact: 111-111-1101</div>
                <div className="date">Date: 5/4/18</div>
                <div className="gasFee">Gas Fee: $3.00</div>
                <div className="role">Driver</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Denver</div>
                <div className="name">Name: Donald Grump</div>
                <div className="contact">Contact: 211-311-4111</div>
                <div className="date">Date: 5/5/18</div>
                <div className="gasFee">Gas Fee: $6.00</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listingSPEC">
                <div className="destination">Destination: {this.xyz.destination} </div>
                <div className="name">Name: {this.xyz.firstName}{this.xyz.lastName}</div>
                <div className="contact">Contact: {this.xyz.contact}</div>
                <div className="date">Date: {this.xyz.date}</div>
                <div className="gasFee">Gas Fee: ${this.xyz.gasFee}</div>
                <div className="role">{this.xyz.value}</div>
              </div>
            </div>
          <Link to="/newlisting">
            <div className="newListing">+</div>
          </Link>
      </MuiThemeProvider>
    );
  }
}

export default Listings;
