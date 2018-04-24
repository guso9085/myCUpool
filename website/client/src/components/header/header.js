import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './header.css'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Link className="App-title" to="/Homepage">my<span style={{color:'#CFB584'}}>CU</span>pool</Link>
          <Link className="App-listings" to="/Listings">Listings</Link>
          <Link className="App-register" to="/Register">Register</Link>
          <Link className="App-login" to="/Login">Login</Link>
        </div>
      </header>
    );
  }
}

export default Header;
