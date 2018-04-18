import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h1 className="App-disclaimer-title">my<span style={{color:'#CFB584'}}>CU</span>pool</h1>
        <p className= "App-disclaimer">is not responsible for any issues caused by the use of our application</p>
      </footer>
    );
  }
}

export default Footer;
