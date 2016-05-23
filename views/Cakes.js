import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

let imgStyle = {
	width: 100 + 'px',
	height: 100 + 'px',
	margin:	20 + 'px',
	border: 5 + 'px solid pink',
	borderRadius: 50 + '%',
	transition: 'all 0.8s ease'
}

let blowUpPic = (e) => {
	if (e.currentTarget.style.width = 100 + 'px') {
		return (e.currentTarget.style.width = 300 + 'px', e.currentTarget.style.height = 300 + 'px')
	}
}

let smallMe = (e) => {
	if (e.currentTarget.style.width = 300 + 'px') {
		return (e.currentTarget.style.width =100 + 'px', e.currentTarget.style.height = 100 + 'px')
	}
}


let cakeArrayData = [
	'../assets/cakes/IMG_2597.JPG',
	'../assets/cakes/IMG_2598.JPG',
	'../assets/cakes/IMG_2599.JPG',
	'../assets/cakes/IMG_2600.JPG',
	'../assets/cakes/IMG_2601.JPG',
	'../assets/cakes/IMG_2602.JPG',
	'../assets/cakes/IMG_2603.JPG',
	'../assets/cakes/IMG_2604.JPG',
	'../assets/cakes/IMG_2605.JPG',
	'../assets/cakes/IMG_2606.JPG',
	'../assets/cakes/IMG_2608.JPG',
	'../assets/cakes/IMG_2609.JPG',
	'../assets/cakes/IMG_2610.JPG',
	'../assets/cakes/IMG_2611.JPG',
	'../assets/cakes/IMG_2612.JPG',
	'../assets/cakes/IMG_2613.JPG',
	'../assets/cakes/IMG_2614.JPG',
	'../assets/cakes/IMG_2615.JPG',
	'../assets/cakes/IMG_2616.JPG',
	'../assets/cakes/IMG_2617.JPG',
	'../assets/cakes/IMG_2618.JPG'
]

const cakeArray = cakeArrayData.map(function(cake, index){
	return <img onMouseOver={blowUpPic} 
				onMouseOut = {smallMe}
				style={imgStyle}
				key={index} 
				src={cake}/>
})



class Cakes extends React.Component {
  
  componentDidMount() {
  	console.log('will mount')
  }

  render(){

    return (
    	<div>
    		<Header/>
    		{cakeArray}
    		<Footer/>
    	</div>
    )
  }
}


export default Cakes