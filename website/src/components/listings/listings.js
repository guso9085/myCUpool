import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import './listings.css';
var store = require('../store/main');

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state={
      listings: []
    }
    this.xyz = JSON.parse(localStorage.xyz)
    this.getData();
  }



  getData() {
    var self = this;
    store.getListings(function(data) {
      self.setState({listings: data.info.listings});
      console.log(self.state.listings);
    })
  }



  /*renderPost(listings) {
    return listings.map(list =>
      <div className="listing">
        <div className="destination">Destination: {list.destination} </div>
        <div className="name">Name: {list.firstName}{list.lastName}</div>
        <div className="contact">Contact: {list.contact}</div>
        <div className="date">Date: {list.date}</div>
        <div className="gasFee">Gas Fee: {list.gasFee}$</div>
        <div className="role">{list.role}</div>
      </div>
    );
  }*/

  render() {
    var items = this.state.listings.map(posts => {
      return (<div className="listing">
                <div className="destination">Destination: {posts.destination} </div>
                <div className="name">Name: {posts.firstname} {posts.lastname}</div>
                <div className="contact">Contact: {posts.contact}</div>
                <div className="date">Date: {posts.date}</div>
                <div className="gasFee">Gas Fee: ${posts.gasFee}</div>
                <div className="role">{posts.value}</div>
              </div>)
    });
    return (
      <MuiThemeProvider>
          <AppBar title="Listings" showMenuIconButton={false} className="appBar" />
            <div className="listings">
              {items}
            </div>
          <Link to="/newlisting">
            <div className="newListing">+</div>
          </Link>
      </MuiThemeProvider>
    );
  }
}

export default Listings;
