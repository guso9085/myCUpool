/* Required Modules */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

/* Import Components */
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Listings from './components/listings/listings';
import newListing from './components/newlisting/newlisting';
import Login from './components/login/userLogin';
import Register from './components/register/register';
import Homepage from './components/homePage/homePage';
import Profile from './components/profile/profile'

/*------------------------------------
   COMPONENT TO RUN THE WEBSITE
------------------------------------*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
    }
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Listings' component={Listings} />
            <Route exact path='/newListing' component={newListing} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Profile' component={Profile} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
