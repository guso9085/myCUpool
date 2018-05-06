import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import logo from './logo.svg';
import './header.css'

import {getParameter} from '../common/common.js'
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Link className="App-title" to="/">my<span style={{color:'#CFB584'}}>CU</span>pool</Link>
          <Link className="App-listings" to="/Listings">Listings</Link>
          <Link id="register" className="App-register" to="/Register">Register</Link>
          <Link id="profile" className="App-profile" to="/Profile" style={{display:'none'}}>Profile</Link>
          <Link id="login" className="App-login" to="/Login">Login</Link>
          <Link id="logout" className="App-login" style={{display:'none'}} to="/" onClick={this.handleClick.bind(this)}>Logout</Link>
        </div>
      </header>
    );
  }
    handleClick(){

        document.getElementById('logout').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        this.props.history.push({
            pathname:"/",
            query:{
            }
        })
    }
}

export default Header;
