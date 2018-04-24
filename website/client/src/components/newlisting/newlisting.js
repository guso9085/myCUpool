import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './newlisting.css';

class newListing extends Component {
  constructor(props) {
	super(props);
	this.state={
	  title:'',
	  firstName:'',
	  lastName:'',
	  contact:'',
	  gasFee:'',
	  location: '',
	  role: ''
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
             hintText="Enter the desired post title"
             floatingLabelText="Title"
             value={this.state.title}
             onChange = {e => this.setState( { title: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             value={this.state.firstName}
             onChange = {e => this.setState( { firstName: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field3"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             value={this.state.lastName}
             onChange = {e => this.setState( { lastName: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field4"
             hintText="Enter an email or phone number"
             floatingLabelText="Method of contact"
             value={this.state.contact}
            onChange = {e => this.setState( { contact: e.target.value } )}
             />
           <br/>
           <SelectField
           	  className="field5"
	          floatingLabelText="Gas Fee"
	          value={this.state.gasFee}
	          onChange={e => this.setState( { gasFee: e.target.value } )}
	        >
	          <MenuItem value={false} primaryText="No" />
	          <MenuItem value={true} primaryText="Yes" />

	        onChange = {e => this.setState( { gasFee: e.target.value } )}
	        </SelectField>
           <br/>
           <SelectField
           	  className="field6"
	          floatingLabelText="Driver or passenger?"
	          value={this.state.role}
	          onChange={e => this.setState( { role: e.target.value } )}
	        >
	          <MenuItem value={false} primaryText="Driver" />
	          <MenuItem value={true} primaryText="Passenger" />
	        </SelectField>
           <br/>
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={this.registerUser}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default newListing;
