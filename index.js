import React from 'react';
import Router, { Route, RouteHandler } from 'react-router';
import UserComponent from './components/UserComponent';

let App = React.createClass({
	render () {
		return <RouteHandler/>;
	}
});

let routes = (
	<Route path="/" handler={App}>
		<Route name="user" path="/" handler={UserComponent}/>
		<Route name="repos" handler={ReposComponent}/>
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
	let container = document.createElement('div');
	container.id = name;
	document.body.appendChild(container);
	React.render(<Handler/>, container);
});
