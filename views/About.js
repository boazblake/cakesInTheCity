import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

class About extends React.Component {
  render(){
  	let StyleImg = {
  		width:300 + 'px',
  		position: 'absoute',
  		right: 10 + 'px',
  		display: 'block'
  	}

  	let StyleTxt = {
  		color: 'pink',
  		textAlign: 'center'
  	}


  	let divStyleWrapper = {
  		display: 'inline-block',
  		width: 80 + '%'
  	}

    return (
    	<div >
    		<Header/>
    		<div className='AboutWrapper' style={divStyleWrapper}>
	    		<img style={StyleImg} src='../assets/images/about_pic.jpg'/>
	    		<br/>
	    		<email style={StyleTxt}><h1><span className="glyphicon glyphicon-envelope"></span></h1><h2>jennifer@theflourgirlcakecompany.com</h2></email>
	    		<br/>
	    		<tel style={StyleTxt}><h1><span className="glyphicon glyphicon-phone-alt"></span></h1><h2>832.434.6120</h2></tel>
	    	</div>
    		<Footer/>
    	</div>
    )
  }
}


export default About