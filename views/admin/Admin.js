import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../modules/header'




(function(a){
	if(window.filepicker){return}
	var b =a.createElement("script");b.type="text/javascript";
	b.async=!0;
	b.src=("https:"===a.location.protocol?"https:":"http:")+"//api.filestackapi.com/filestack.js";
	var c = a.getElementsByTagName("script")[0];
		c.parentNode.insertBefore(b,c);
	var d={};
		d._queue=[];
	var e="pick,pickMultiple,pickAndStore,read,write,writeUrl,export,convert,store,storeUrl,remove,stat,setKey,constructWidget,makeDropPane".split(",");
	var f=function(a,b){
		return function(){
			b.push([a,arguments])
		}
	};
	for(var g=0;g<e.length;g++)
		{d[e[g]]=f(e[g],d._queue)}
	window.filepicker=d
})
(document);

filepicker.pick(
 {
    mimetype: 'image/*',
    container: 'modal',
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
  },
  function(Blob){
    console.log(Blob.url);
    ReactDOM.render(<img src={Blob.url}/>, document.querySelector('#a'))
  },
  function(FPError){
 console.log(FPError.toString());
  }
);


class Admin extends React.Component {
  render(){
    return (

    	<div>
    		<h1>Admin Site</h1>
    		<NavBar />
    		<input	type="filepicker" 
    				data-fp-apikey="ACOZV2bQTS2gGrnnts7IRz"
    				data-fp-mimetypes="*/*"
    				data-fp-container="modal"
    				data-fp-multiple="true"
    				data-fp-services="COMPUTER,DROPBOX,FACEBOOK"
    				onchange={filepicker}/>
    				<div id='a'></div>
      	</div>
    )
  }
}


export default Admin