import React from 'react'
import NavBar from '../modules/header'

const handleUpload = (e) => {
	e.preventDefault();
	alert(event.fpfile.url);

}


class Admin extends React.Component {
  render(){
    return (

    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
    		<input type="filepicker"
    				data-fp-apikey="ACOZV2bQTS2gGrnnts7IRz"
    				onchange={handleUpload}
    				data-fp-button-class="btn btn-primary" />
      	</div>
    )
  }
}


export default Admin