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

// hack for github pages
// local and gh-pages have different base-href
let baseHref = '/phrontend-example/?';
if (process.env.NODE_ENV!=='production') baseHref = '/';

let routes = (
	<Route path={baseHref} name="page" handler={App}>
		<DefaultRoute handler={Page}/>
		<Route name="user" handler={UserComponent}/>
		<Route name="repos" handler={ReposComponent}/>
		<Route name="followers" handler={FollowersComponent}/>
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
	React.render(<Handler/>, document.getElementById('container'));
});
