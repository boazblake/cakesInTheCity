import React from 'react';
import ReactDOM from 'react-dom';
import {ReactRouter, Router, Route, IndexRoute, hashHistory} from 'react-router';

import About from './views/About';
import App from './App';
import Admin from './views/admin/Admin';
import Menu from './views/Menu';
import Home from './views/Home';
import Cakes from './views/Cakes';
import Cupcakes from './views/Cupcakes';


ReactDOM.render(<Router history={hashHistory}>
					<Route path= '/' component={Home}/>
					<Route path='/menu' component={Menu}/>
					<Route path='/admin' component={Admin}/>
					<Route path='/home' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/galleries/cakes' component={Cakes}/>
					<Route path='/galleries/cupcakes' component={Cupcakes}/>
				</Router>,
					 document.querySelector('#app'));
