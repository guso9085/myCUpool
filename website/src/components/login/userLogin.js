import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div>
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Login" showMenuIconButton={false} className="appBar" />
           <TextField
             className ="field1"
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <RaisedButton className="submit" label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default Login;
