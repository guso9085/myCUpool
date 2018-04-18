import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  PropTypes as MapPropTypes,
} from 'react-leaflet'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/userLogin';
import Register from './components/register/register';
import Homepage from './components/homePage/homePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Register' component={Register} />

          <Footer />
        </div>
      </Router>
    );
  }
}

var express = require('express')
var app = express()
var mysql = require('mysql')

var myConnection = require('express-myconnection')
/**
 * Load the stored values for database connection.
 */
var config = require('./config')
var dbOptions = {
 host: config.database.host,
 user: config.database.user,
 password: config.database.password,
 port: config.database.port,
 database: config.database.db
}



export default App;
