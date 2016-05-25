import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../modules/header'
import filepickerWrapper from '../../config/filePicker'
import Uploaded from '../modules/Uploaded'
import FileStackUpload from './_fileUpload'
import Secrets from '../../secrets'


filepickerWrapper()

console.log('filepicker',filepicker)



class Admin extends React.Component {

  
  componentDidMount() {
  	console.log('did mount!')
  	ReactDOM.unmountComponentAtNode(document.querySelector('#store-input'))
  }

  _handleUpload(Blob, domEl) {
  	console.log('Blob', Blob)
  	console.log('domEl', domEl)
  	this._uploadToFileStack(domEl)
  }

  _saveToFirebase(userData, Blob){

  }


  _uploadToFileStack(imgDataEl, userData, cb){
  	console.log('apikeyFileStack',Secrets.apikeyFileStack)
  	filepicker.setKey(Secrets.apikeyFileStack)

  	filepicker.store(
      imgDataEl,
      function(Blob){
        console.log('sucessfully saved!!', Blob)
        cb(userData, Blob)
      },
      function(err){
        console.log('err', err.toString())
      }
    );
  }
  

  render(){


    return (

    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
    		<FileStackUpload onUpload={this._handleUpload.bind(this)}/>
    		<div id='store-input'></div>
      	</div>
    )
  }
}


export default Admin