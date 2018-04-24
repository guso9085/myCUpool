/* Required Modules */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

/* Import Components */
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Listings from './components/listings/listings';
import Login from './components/login/userLogin';
import Register from './components/register/register';
import Homepage from './components/homePage/homePage';

/*------------------------------------
   COMPONENT TO RUN THE WEBSITE
------------------------------------*/
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path='/Homepage' component={Homepage} />
            <Route exact path='/Listings' component={Listings} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Register' component={Register} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
