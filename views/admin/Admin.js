import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../modules/header'
import filePickerWrapper from '../../config/filePicker'
import Uploaded from '../modules/Uploaded'
let filePicker = filePickerWrapper.filepicker

class Admin extends React.Component {
  
  componentDidMount() {
  	console.log('did mount!')
  	ReactDOM.unmountComponentAtNode(document.querySelector('#uploadedPicPreview'))
  }

  render(){
    return (

    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
    		<input	type="filepicker" 
    				data-fp-apikey="ACOZV2bQTS2gGrnnts7IRz"
    				onchange={filePickerWrapper()}/>
    				<div id='uploadedPicPreview'></div>
      	</div>
    )
  }
}


export default Admin