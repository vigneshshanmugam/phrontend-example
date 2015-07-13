import React from 'react';
import Router, { Route, RouteHandler, Link } from 'react-router';
import UserComponent from './components/UserComponent';
import ReposComponent from './components/ReposComponent';
import FollowersComponent from './components/FollowersComponent';
import styles from './styles.css';

let App = React.createClass({
	render () {
		return <RouteHandler/>;
	}
});

let Page = React.createClass({
	render(){
		return <div>
			Phrontend - Sample App
			<Link className={styles.links} to="user">User</Link>
			<Link className={styles.links} to="repos">Repos</Link>
			<Link className={styles.links} to="followers">Followers</Link>
		</div>
	}
});

let routes = (
	<Route path="/" handler={App}>
		<Route name="page" path="/" handler={Page}/>
		<Route name="user" handler={UserComponent}/>
		<Route name="repos" handler={ReposComponent}/>
		<Route name="followers" handler={FollowersComponent}/>
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
	React.render(<Handler/>, document.getElementById('container'));
});
