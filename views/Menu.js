import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

class Menu extends React.Component {
  render(){
  	let divStyleImg = {
  		width:300 + 'px'
  	}

  	 let divStyleHeading = {
  		color:'pink'
  	}

  	 let divStyleLeft = {
  		position:'relative',
  		left:'10px',
  		display:'inline-block',
  		width:50+'%'
  	}

  	 let divStyleRight = {
  		position:'relative',
  		left:'10px',
  		display:'inline-block',
  		width:50+'%'
  	}



    return (
    	<div>
    		<Header/>
    		<img style={divStyleImg} src='../assets/images/menuPic.jpg'/>
    		<div className='left' style={divStyleLeft}>
	    		<h1 style={divStyleHeading}>FROSTINGS AND FILLINGS</h1>
	    		<p>Chocolate Buttercream, Vanilla Buttercream, Almond Buttercream,
	    		Nutella Buttercream, Mocha Buttercream, Bavarian Cream,
	    		Strawberry puree Filling, Raspberry puree Filling, lemon curd Filling,
	    		Dark Chocolate Ganache, Milk Chocolate Ganache, 
	    		Fruit Flavored Buttercream of your choice, Fresh fruit can also be added </p>
    		</div>
    		<div className='right' style={divStyleRight}>
    		<h1 style={divStyleHeading}>CAKE AND CUPCAKE FLAVORS</h1>
    		<p>Chocolate, Vanilla Bean, White , Red Velvet, Almond, Strawberry, Raspberry, Lemon</p>
    		</div>
    		<div className='bottom'>
    		<h3 style={divStyleHeading}>All cakes are covered in Marshmallow Fondant and
    		are enrobed in chocolate ganache before the fondant is applied</h3>
    		</div>
    		<Footer/>
    	</div>
    )
  }
}


export default Menu