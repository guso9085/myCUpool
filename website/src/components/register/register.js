import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import './register.css';
import {getParameter} from '../common/common.js'

var store = require('../store/main');
class Register extends Component {
  constructor(props) {
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div className ="Register-wrapper">
        <MuiThemeProvider>
          <div>
          <AppBar title="Register" showMenuIconButton={false} className="appBar" />
           <TextField
             className ="field1"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             className ="field3"
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             className ="field4"
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={this.handleClick.bind(this,this.state)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
    handleClick(e){
        if(e.password==""||e.last_name==""||e.first_name==""||e.email==""){
            alert('Please Fill All Blank!');
            return false;
        }
        let reg = new RegExp("^[a-zA-Z0-9]+([._\\\\-]*[a-zA-Z0-9])*@colorado.edu");
        if(!reg.test(e.email)){ //if it's not a email address
            alert("Need Valid Email Address!");
            return false;
        }
      let that = this;
        store.regist(e,function(data){
            if(data.info==undefined){
                alert('Fail to Signup');
            }else{
                if(data.info.message=='success'){
                    alert('Successfully Signup');
                    // document.getElementById('profile').style.display = 'block';
                    document.getElementById('register').style.display = 'none';
                    // document.getElementById('logout').style.display = 'block';
                    // document.getElementById('login').style.display = 'none';
                    that.props.history.push({
                        pathname:"/",
                        query:{
                            id:data.info.userinfo.id,
                            hasRegisted:true
                        }
                    })
                } else {
                    alert('Fail to Signup');
                }
            }
        });
    }
}
const style = {
  margin: 15,
};
export default Register;
