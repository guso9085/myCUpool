import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login.css';
import {getParameter} from '../common/common.js'

var store = require('../store/main');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
      <div>
        <MuiThemeProvider>
          <AppBar title="Login" showMenuIconButton={false} className="appBar" />
          <div className="Login-wrapper">
           <TextField
             className ="field1"
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your Password"
             floatingLabelText="Password"
             type="password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton className="submit" label="Submit" primary={true} onClick={this.handleClick.bind(this,this.state)}/>
          </div>
         </MuiThemeProvider>
      </div>
      </div>
    );
  }
  handleClick(e){
      let that = this;
      store.login(e,function(data){
            if(data==null){
                alert('Wrong User Name or Password')
            }else{
                document.getElementById('logout').style.display = 'block';
                document.getElementById('login').style.display = 'none';
                document.getElementById('profile').style.display = 'block';
                document.getElementById('register').disabled = true;
                sessionStorage.setItem('id',data._info.id);
                that.props.history.push({
                    pathname:"/Profile",
                    query:{
                        id:data._info.id
                    }

                })
            }
      });
  }
}

export default Login;
