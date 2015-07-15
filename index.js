import React from 'react';
import Router, { Route, RouteHandler, Link, DefaultRoute } from 'react-router';
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
	<Route path="/">
		<Route path="phrontend-example/?" name="page" handler={App}>
			<DefaultRoute handler={Page}/>
			<Route name="user" handler={UserComponent}/>
			<Route name="repos" handler={ReposComponent}/>
			<Route name="followers" handler={FollowersComponent}/>
		</Route>
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
	React.render(<Handler/>, document.getElementById('container'));
});
