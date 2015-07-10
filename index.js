import React from 'react';
import Router, { Route, RouteHandler, Link } from 'react-router';
import UserComponent from './components/UserComponent';
import ReposComponent from './components/ReposComponent';
import styles from './styles.css';

let App = React.createClass({
	render () {
		return <RouteHandler/>;
	}
});

let Page = React.createClass({
	render(){
		return <div>
			Testing SEO
			<Link className={styles.links} to="user">User</Link>
			<Link className={styles.links} to="repos">Repos</Link>
		</div>
	}
});

let routes = (
	<Route path="/" handler={App}>
		<Route name="page" path="/" handler={Page}/>
		<Route name="user" handler={UserComponent}/>
		<Route name="repos" handler={ReposComponent}/>
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
	React.render(<Handler/>, document.getElementById('container'));
});
