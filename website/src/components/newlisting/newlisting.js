import React, { Component } from 'react';
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

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className ="Register-wrapper">
        <MuiThemeProvider>
          <div>
          <AppBar title="New listing" showMenuIconButton={false} className="appBar" />
          <TextField
             className ="field1"
             hintText="Enter a post title"
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
           <br/>
           <DatePicker hintText="What day?"
              className="field5"
              mode="landscape"
           />
           <SelectField
              className ="field6"
              floatingLabelText="Gas Fee?"
              value={this.state.value}
              onChange={this.handleChange}
              style={style.customWidth}
            >
              <MenuItem value={1} primaryText="Yes" />
              <MenuItem value={2} primaryText="No" />
           </SelectField>
           <br/>
           <SelectField
              className ="field7"
              floatingLabelText="Driver or passenger"
              value={this.state.value}
              onChange={this.handleChange}
              style={style.customWidth}
            >
              <MenuItem value={1} primaryText="Driver" />
              <MenuItem value={2} primaryText="Passenger" />
           </SelectField>
           <br />
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={this.registerUser}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
  customWidth: {
    width: 150,
  }
};

export default newListing;
