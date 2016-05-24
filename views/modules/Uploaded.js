import React from 'react';
import ReactDOM from 'react-dom';

class Uploaded extends React.Component {

	componentWillUnmount() {
		console.log('bye-bye!!')
	}

  render(){
  	return (
  		<div>
  			<img src={this.props.imgURL} />
  			<p>filename:<b>{this.props.name}</b></p>
  		</div>
  	)    
  }
}



export default Uploaded