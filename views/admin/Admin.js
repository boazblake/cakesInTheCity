import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../modules/header'
import filepickerWrapper from '../../config/filePicker'
import FileStackUpload from './_fileUpload'
import Secrets from '../../secrets'

filepickerWrapper()

console.log('filepicker loadd onto window', filepicker)

class Admin extends React.Component {
  
  _handleImgUpload(blob, domEl) {
  	console.log('blob', blob)
  	console.log('domEl', domEl)
  	this.setState({
  	  uploadedImgEl: domEl,
  	  uploadedBlob:blob
  	})
  }

  _createRecord(){
  	let productData =  this.state.uploadedBlob
 
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
        console.log('imgDataEl!!', imgDataEl)
        cb(productData, Blob)
        
/////chnage state of _fileuplaod to display ""succesfully uplaoded


      },
      function(err){
        console.log('err', err.toString())
      }
    );
  }

  _saveToFirebase(productData, Blob){
    productData.imgLink = Blob.url
    productData.size = Blob.size/1000
    productData.name = Blob.filename
    console.log('productData for firebase', productData)
    console.log('Blob', Blob)
    // ??ref.save(productData)?? to firebase
  }

  render(){
    return (
    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
    		<FileStackUpload onSubmit={this._createRecord.bind(this)} onUpload={this._handleImgUpload.bind(this)}/>
    		<div id='previewImg'></div>
      	</div>
    )
  }
}


export default Admin