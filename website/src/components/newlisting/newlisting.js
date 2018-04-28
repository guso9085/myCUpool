import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import './newlisting.css';
import DropDownMenu from 'material-ui/DropDownMenu';


class newListing extends Component {
  constructor(props) {
  	super(props);
  	this.state={
  	  destination:'',
  	  firstName:'',
  	  lastName:'',
  	  contact:'',
  	  gasFee: null,
  	  role: '',
      driver:'',
      date: null
  	}
  }

  /*state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});*/

  handleDriver = (event, index, value) => {
    this.setState({driver:value,})
  };

  handleGas = (event, index, value) => {
    this.setState({gasFee:value,})
  };

  render() {
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
             onChange = { (event,newValue) => this.setState( {destination:newValue} )}
             />
           <br/>
           <br/>
           <DatePicker hintText="What day?"
              className="field5"
              mode="landscape"
              onChange={ (event,date) => this.setState( {date:date,}) }
           />
           <br/>
           <SelectField
              className ="field6"
              floatingLabelText="Gas Fee?"
              onChange={this.handleGas}
              style={style.customWidth}
            >
              <MenuItem value={"Yes"} selected={"true"} primaryText="Yes" />
              <MenuItem value={2} key={2} primaryText="No" />
           </SelectField>
           <br/>
           <SelectField
              className ="field7"
              floatingLabelText="Driver or passenger"
              name="driver"
              onChange={this.handleDriver}
              style={style.customWidth}
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
    console.log(e.gasFee)
    console.log(e.driver)
    if(e.destination==""||e.firstName==""||e.lastName==""||e.email==""){
        alert('Please Fill All Blank!');
        return false;
    }

  }

}

const style = {
  margin: 15,
  customWidth: {
    width: 150,
  }
};

export default newListing;
