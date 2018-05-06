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
                <div className="destination">Destination: Mile High Stadium</div>
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
                <div className="gasFee">Gas Fee: $10.00</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Keystone </div>
                <div className="name">Name: Gustav Solis</div>
                <div className="contact">Contact: 720-366-3767</div>
                <div className="date">Date: 5/3/18</div>
                <div className="gasFee">Gas Fee: Free</div>
                <div className="role">Driver</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Beaver Creek</div>
                <div className="name">Name: Sam Bennetts</div>
                <div className="contact">Contact: 931-143-1843</div>
                <div className="date">Date: 5/4/18</div>
                <div className="gasFee">Gas Fee: OK</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Copper</div>
                <div className="name">Name: Zhiren Chen</div>
                <div className="contact">Contact: 287-378-4439</div>
                <div className="date">Date: 5/5/18</div>
                <div className="gasFee">Gas Fee: OK</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: California</div>
                <div className="name">Name: CSU</div>
                <div className="contact">Contact: 911-911-9111</div>
                <div className="date">Date: 5/3/18</div>
                <div className="gasFee">Gas Fee: OK</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Fort Collins </div>
                <div className="name">Name: Yi Wu</div>
                <div className="contact">Contact: 930-340-3419</div>
                <div className="date">Date: 5/10/18</div>
                <div className="gasFee">Gas Fee: FREE</div>
                <div className="role">Driver</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Airport</div>
                <div className="name">Name: Yuxuan Luo</div>
                <div className="contact">Contact: 111-111-1101</div>
                <div className="date">Date: 5/4/18</div>
                <div className="gasFee">Gas Fee: $3.00</div>
                <div className="role">Driver</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Vietnam</div>
                <div className="name">Name: Krishna Dholakiya</div>
                <div className="contact">Contact: 211-311-4111</div>
                <div className="date">Date: 5/5/18</div>
                <div className="gasFee">Gas Fee: OK</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Sweden</div>
                <div className="name">Name: Donald Trump</div>
                <div className="contact">Contact: 911-911-9111</div>
                <div className="date">Date: 5/3/18</div>
                <div className="gasFee">Gas Fee: $500.00</div>
                <div className="role">Driver</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Finland</div>
                <div className="name">Name: Eric Ericson</div>
                <div className="contact">Contact: 101-533-2950</div>
                <div className="date">Date: 5/4/18</div>
                <div className="gasFee">Gas Fee: $600.00</div>
                <div className="role">Driver</div>
              </div>
              <div className="listing">
                <div className="destination">Destination: Longmont</div>
                <div className="name">Name: Michael Whitlock</div>
                <div className="contact">Contact: 431-366-8414</div>
                <div className="date">Date: 5/5/18</div>
                <div className="gasFee">Gas Fee: OK</div>
                <div className="role">Passenger</div>
              </div>
              <div className="listingSPEC" style={{display: this.xyz.toggle }}>
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
