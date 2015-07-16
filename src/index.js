import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';

import App from './components/App';
import HomeComponent from './components/HomeComponent';
import ReposComponent from './components/ReposComponent';
import FollowersComponent from './components/FollowersComponent';

// hack for github pages
// local and gh-pages have different base-href
let baseHref = '/phrontend-example/?';
if (process.env.NODE_ENV!=='production') baseHref = '/';

let routes = (
	<Route path={baseHref} name="page" handler={App}>
		<DefaultRoute handler={HomeComponent}/>
		<Route name="repos" handler={ReposComponent}/>
		<Route name="followers" handler={FollowersComponent}/>
	</Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
	React.render(<Handler/>, document.getElementById('container'));
});
