import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

const cakeArray = []



class Cakes extends React.Component {
  
  componentDidMount() {
  	console.log('will mount')
  }

  render(){

  	let imgStyle = {
  		width: 200 + 'px',
  		margin:	20 + 'px',
  		border: 12 + 'px solid pink',
  		borderRadius: 20 + 'px'
  	}


    return (
    	<div>
    		<Header/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2597.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2598.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2599.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2600.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2601.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2602.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2603.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2604.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2605.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2606.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2608.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2609.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2610.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2611.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2612.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2613.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2614.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2615.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2616.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2617.JPG'/>
    		<img style={imgStyle} src='../assets/cakes/IMG_2618.JPG'/>
    		<Footer/>
    	</div>
    )
  }
}


export default Cakes