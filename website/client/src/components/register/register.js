import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phoneNumber: '',
      userList: []
    }
  }

  componentDidMount() {
    this.listUsers()
  }

  listUsers() {
    fetch('/listUsers')
      .then(res => res.json())
      .then(res => this.setState({userList: res.data}))
      .catch(err => console.log(err))
  }

  renderUserList = ({UserID, FirstName, LastName}) => <div key={UserID}>{UserID} {FirstName} {LastName}</div>

  registerUser = _ => {
    const newUser = this.state;
    fetch(`/registerUser?first=${newUser.firstName}&last=${newUser.lastName}&email=${newUser.email}&pass=${newUser.password}&phone=${newUser.phoneNumber}`)
      .catch(err => console.log(err))
  }

  /*onChangeEmail(event) {
    var re = "^[A-Za-z0-9._%+-]+@colorado.edu$"
    if (event.target.value.match(re)) {
      this.setState({ email: event.target.value })
    } else {
      this.setState({ email: event.target.value })
    }
  }*/

  // phonenum = re.compile(r'^[0-9]{3}([\-.])*[0-9]{3}([\-.])\1*[0-9]{4}$')

  render() {
    var re = "^[A-Za-z0-9._%+-]+@colorado.edu$"
    return (
      <div className ="Register-wrapper">
        <MuiThemeProvider>
          <div>
          <AppBar title="Register" showMenuIconButton={false} className="appBar" />
           <TextField
             className ="field1"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             value={this.state.firstName}
             onChange = {e => this.setState( { firstName: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field1"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             value={this.state.lastName}
             onChange = {e => this.setState( { lastName: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field3"
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             value={this.state.email}
            onChange = {e => this.setState( { email: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field5"
             hintText="Enter your Phone Number"
             floatingLabelText="Phone Number"
             value={this.state.phoneNumber}
             onChange = {e => this.setState( { phoneNumber: e.target.value } )}
             />
           <br/>
           <TextField
             className ="field4"
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             value={this.state.password}
             onChange = {e => this.setState( { password: e.target.value } )}
             />
           <br/>
           <RaisedButton className="submit" label="Submit" primary={true} style={style} onClick={this.registerUser}/>
          </div>
         </MuiThemeProvider>
         <div className="UserList">
          <h2> User List </h2>
          {this.state.userList.map(this.renderUserList)}
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;
