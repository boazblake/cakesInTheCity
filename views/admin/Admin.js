import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../modules/header'
import filepickerWrapper from '../../config/filePicker'
import FileStackUpload from './_fileUpload'
import Secrets from '../../secrets'


filepickerWrapper()

console.log('filepicker loadd onto window', filepicker)



class Admin extends React.Component {

  
  componentDidMount() {
  	console.log('did mount!')
  }

  _handleImgUpload(blob, domEl) {
  	console.log('blob', blob)
  	console.log('domEl', domEl)
  	this.setState({
  	  uploadedImgEl: domEl,
  	  uploadedBlob:blob
  	})
  }


  // executed as an event listener on a 'finalize entry' button 
  _createRecord(){
  	let productData =  this.state.blob
 
  	this._uploadToFileStack(
  		this.state.uploadedImgEl, 
  		productData, 
  		this._saveToFirebase
  	)
  }
 

  _uploadToFileStack(imgDataEl, productData, cb){
  	console.log('apikeyFileStack',Secrets.apikeyFileStack)
  	filepicker.setKey(Secrets.apikeyFileStack)

  	filepicker.store(
      imgDataEl,
      function(Blob){
        console.log('sucessfully saved!!', Blob)
        cb(productData, Blob)
      },
      function(err){
        console.log('err', err.toString())
      }
    );
  }

   _saveToFirebase(productData, Blob){
  	productData.imgLink = Blob.url

  	// ??ref.save(productData)?? to firebase
  }

  

  render(){


    return (

    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
    		<FileStackUpload onSubmit={this._createRecord.bind(this)} onUpload={this._handleImgUpload.bind(this)}/>
    		<div id='store-input'></div>
      	</div>
    )
  }
}


export default Admin