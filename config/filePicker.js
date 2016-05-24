import React from 'react';
import ReactDOM from 'react-dom';
import Uploaded from '../views/modules/Uploaded';

let filePickerWrapper = () => {

	(function(a){
		if(window.filepicker){return}
		var b =a.createElement("script");
				b.type="text/javascript";
				b.async=!0;
				b.src=("https:"===a.location.protocol?"https:":"http:")+"//api.filepicker.io/v2/filepicker.js";
		var c = a.getElementsByTagName("script")[0];
				c.parentNode.insertBefore(b,c);
		var d={};
				d._queue=[];
		var e="pick,pickMultiple,pickAndStore,read,write,writeUrl,export,convert,store,storeUrl,remove,stat,setKey,constructWidget,makeDropPane".split(",");
		
	//map function??
		var f=function(a,b){
			return function(){
				b.push([a,arguments])
			}
		};
		for(var g=0;g<e.length;g++) {
			d[e[g]]=f(e[g],d._queue)
		}
		window.filepicker=d
	})

	(document);

	filepicker.pick(
		{
		mimetype: 'image/*',
		container: 'modal',
		services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP'],
		hide:'true'
		},
		function(Blob){
			ReactDOM.unmountComponentAtNode(document.querySelector('#uploadedPicPreview'))
			console.log(Blob.url);
			let name = Blob.filename.split('.')[0]
			console.log(name);
			ReactDOM.render(<Uploaded imgURL={Blob.url} name={name} />, document.querySelector('#uploadedPicPreview'))
		},
		function(FPError){
			console.log(FPError.toString());
		}
	);	
}



export default filePickerWrapper