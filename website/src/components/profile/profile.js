import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import './profile.css';
import {getParameter} from '../common/common.js'
var store = require('../store/main');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
        userinfo:{
            id:'',
            firstname:'',
            description:'',
            lastname:'',
            email:'',
            password:'',
            phonenumber:''
        }
  }
      var id = sessionStorage.getItem('id');
      this.getData(id);
      //this.getData(this.props.location.query.id);

  }
  render() {
      var firstname = this.state.userinfo.firstname||"";
      var lastname = this.state.userinfo.lastname||"";
      var email = this.state.userinfo.email||"";
      var phonenumber = this.state.userinfo.phonenumber||"";
      var description = this.state.userinfo.description||"";
      // var driver = this.state.userinfo.driver;
      var password = this.state.userinfo.password||"";
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Profile" showMenuIconButton={false} className="appBar" />
           <TextField
             className ="field1"
             value={firstname}
             readOnly="true"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.datachange({first_name:newValue})}
             />
           <br/>
           <TextField
               value={lastname}
               readOnly="true"
             className ="field2"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.datachange({last_name:newValue})}
             />
           <br/>
           <TextField
             className ="field3"
             value={email}
             readOnly="true"
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.datachange({email:newValue})}
             />
           <br/>
           <TextField
             className ="field4"
             value={password}
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.datachange({password:newValue})}
             />
           <br/>
              <br/>
              <TextField
                  value={phonenumber}
                  className ="field2"
                  hintText="Enter your PhoneNumber"
                  floatingLabelText="PhoneNumber"
                  onChange = {(event,newValue) => this.datachange({phonenumber:newValue})}
              />
              <br/>
              <TextField
                  value={description}
                  className ="field2"
                  hintText="Enter your Description"
                  floatingLabelText="Description"
                  onChange = {(event,newValue) => this.datachange({description:newValue})}
              />
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={this.handleClick.bind(this,this.state)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
    datachange(data){
      for(let a in data){
          let temp = this.state.userinfo;
          if(a=='password'){
              temp.password = data[a];
          }else if(a=='phonenumber'){
              temp.phonenumber = data[a];
          }else if(a=='description'){
              temp.description = data[a];
          }
          this.setState({userinfo: temp});
      }
    }
    getData(id) {
        var self = this;
        store
            .getAllData(id,function (data) {
                self.setState({userinfo: data.info.users[0]});
                console.log(self.state.userinfo);
            })
    }
    handleClick(e) {
        store.update(e,function(data){
            if(data.message=="success"){
                alert('Successfully Updated')
            }
        });
    }
}
const style = {
  margin: 15,
};


export default Profile;
