import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../modules/header'
import filePickerWrapper from '../../config/filePicker'
import Uploaded from '../modules/Uploaded'
let filePicker = filePickerWrapper.filepicker

class Admin extends React.Component {
  
  componentWillMount() {
  	this.lock = new Auth0Lock('HmrYryFPN9pkRjyb3dhLvfgdUPwwNy8i', 'cakesinthecity.auth0.com');
  	this.lock.show()
  }

  render(){
    return (

    	<div className="login-box">
      <a onClick={this.showLock}>Sign In</a>
    </div>);
  }
}


export default Admin