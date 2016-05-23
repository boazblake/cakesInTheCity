import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

class Menu extends React.Component {
  render(){
  	let divStyleImg = {
  		width:300 + 'px',
      display:'block'
  	}

  	 let divStyleHeading = {
  		color:'pink'
  	}

  	 let divStyleLeft = {
  		display:'inline-block',
      width: 40 + '%',
      margin: 30 + 'px'
  	}

  	 let divStyleRight = {
  		display:'inline-block',
      width: 50 + '%',
      margin: 30 + 'px'
  	}

  	 let divStyleBottom = {
  		bottom:'10px',
  		display:'block',
      margin: 30 + 'px'
  	}


    return (
    	<div>
    		<Header/>
    		<img style={divStyleImg} src='../assets/images/menuPic.jpg'/>
    		<div className='left' style={divStyleLeft}>
	    		<h1 style={divStyleHeading}>FROSTINGS AND FILLINGS</h1>
	    		<h4>Chocolate Buttercream, Vanilla Buttercream, Almond Buttercream,
	    		Nutella Buttercream, Mocha Buttercream, Bavarian Cream,
	    		Strawberry puree Filling, Raspberry puree Filling, lemon curd Filling,
	    		Dark Chocolate Ganache, Milk Chocolate Ganache, 
	    		Fruit Flavored Buttercream of your choice, Fresh fruit can also be added </h4>
    		</div>
    		<div className='right' style={divStyleRight}>
	    		<h1 style={divStyleHeading}>CAKE AND CUPCAKE FLAVORS</h1>
	    		<h4>Chocolate, Vanilla Bean, White , Red Velvet, Almond, Strawberry, Raspberry, Lemon</h4>
    		</div>
    		<div className='bottom' style={divStyleBottom}>
	    		<h3 style={divStyleHeading}>All cakes are covered in Marshmallow Fondant and
	    		are enrobed in chocolate ganache before the fondant is applied</h3>
    		</div>
    		<Footer/>
    	</div>
    )
  }
}


export default Menu