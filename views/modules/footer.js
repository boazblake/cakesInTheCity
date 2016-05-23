import React from 'react'

class Footer extends React.Component {
  render(){

  	const boaz = {
  		name:'<Boaz/>',
  		href:'https://boazblake.github.io/portfolio'
  	}


    return (
    	<div>
    	<p>Built with <span className="glyphicon glyphicon-heart"></span> 
    	by<a href={boaz.href}> {boaz.name} </a>
    	</p>
    	</div>
    )
  }
}


export default Footer