import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import './newlisting.css';

class newListing extends Component {
  constructor(props) {
  	super(props);
    this.handleClick = this.handleClick.bind(this);
  	this.state={
  	  destination:'',
  	  firstName:'',
  	  lastName:'',
  	  contact:'',
  	  gasFee: '',
      date: '',
      value: '',
      toggle: 'none',
  	}
  }

  handleChange = (event, index, value) => this.setState({value});

/*
  handleDriver = (event, index, value) => {
    this.setState({driver:value,})
  };

  handleGas = (event, index, value) => {
    this.setState({gasFee:value,})
  };
*/
  render() {
    localStorage.xyz = JSON.stringify(this.state)
    return (
      <div className ="Register-wrapper">
        <MuiThemeProvider>
          <div>
          <AppBar title="New listing" showMenuIconButton={false} className="appBar" />
          <TextField
             className ="field1"
             hintText="Enter a destination"
             floatingLabelText="Destination"
             onChange = { (event,newValue) => this.setState( {destination:newValue} )}
             />
           <br/>
           <TextField
             className ="field5"
             hintText="Example: May 6th"
             floatingLabelText="Day of travel"
             onChange = { (event,newValue) => this.setState( {date:newValue} )}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = { (event,newValue) => this.setState( {firstName:newValue} )}
             />
           <br/>
           <TextField
             className ="field3"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = { (event,newValue) => this.setState( {lastName:newValue} )}
             />
           <br/>
           <TextField
             className ="field4"
             hintText="Enter an email or phone number"
             floatingLabelText="Method of contact"
             value={this.state.contact}
             onChange = { (event,newValue) => this.setState( {contact:newValue} )}
             />
           <br/>
           <TextField
             className ="field6"
             hintText="Numeric dollar amounts only."
             floatingLabelText="Gas Fee"
             value={this.state.gasFee}
             onChange = { (event,newValue) => this.setState( {gasFee:newValue} )}
             />
           <br/>
           <SelectField
              className ="field7"
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText="Role"
            >
              <MenuItem value={"Driver"} primaryText="Driver" />
              <MenuItem value={"Passenger"} primaryText="Passenger" />
            </SelectField>
          <br/>
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={this.handleClick.bind(this,this.state)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }

  handleClick(e) {
    console.log(e.destination)
    console.log(e.date)
    console.log(e.firstName)
    console.log(e.lastName)
    console.log(e.contact)
    console.log(e.gasFee)
    console.log(e.value)
    if(e.destination==""||e.firstName==""||e.lastName==""||e.email==""){
        alert('Please Fill All Blank!');
        return false;
    }
    else {
        //SOMEHOW HIDE THE DIV WITH CLASSNAME LISTINGSPEC
        alert('Posted!');
        this.setState( {toggle:"inline-block"} )
        browserHistory.push('/Listings')
        window.location.reload();
        return true;
    }

  }

}

const style = {
  margin: 15,
};

export default newListing;
