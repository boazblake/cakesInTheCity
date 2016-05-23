import React from 'react'
import NavBar from '../modules/header'
import Firebase from 'firebase'
import fbRef from './fbRef'


let storageRef = firebase.storage().ref();
let logoImageRef = storageRef.child('admin/images/logo.jpg');


let file = new File('../../assets/logo.jpg', 'logo')
let uploadTask = storageRef.child('admin/images/' + logoImageRef.name).put(file)

class Admin extends React.Component {
  render(){
    return (

    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
      	</div>
    )
  }
}


export default Admin