import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

class About extends React.Component {
  render(){

  	let divStyleWrapper = {
  		display: 'inline-block',
  		width: 80 + '%'
  	}


  	let StyleImg = {
  		width:300 + 'px',
  		position: 'absoute',
  		right: 10 + 'px',
  		display: 'block'
  	}


  	let divStyleWRapperTxt = {
  		color: 'pink',
  		textAlign: 'center'
  	}


    return (
    	<div >
    		<Header/>
    		<div className='aboutWrapper' style={divStyleWrapper}>
	    		<img style={StyleImg} src='../assets/images/about_pic.jpg'/>
	    		<br/>
	    		<div className='txtWrapper' style={divStyleWRapperTxt}>
		    		<email ><h1><span className="glyphicon glyphicon-envelope"></span></h1><h2>jennifer@theflourgirlcakecompany.com</h2></email>
		    		<br/>
		    		<tel ><h1><span className="glyphicon glyphicon-phone-alt"></span></h1><h2>832.434.6120</h2></tel>
		    	</div>
	    	</div>
    		<Footer/>
    	</div>
    )
  }
}


export default About