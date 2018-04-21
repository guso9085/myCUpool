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
          <h1 className="App-title">my<span style={{color:'#CFB584'}}>CU</span>pool</h1>
          <Link className="App-locations" to="/Locations">Locations</Link>
          <Link className="App-register" to="/Register">Register</Link>
          <Link className="App-login" to="/Login">Login</Link>
        </div>
      </header>
    );
  }
}

export default Header;
