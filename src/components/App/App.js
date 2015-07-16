import React from 'react';
import {RouteHandler} from 'react-router';
import UsernameStore from 'UsernameStore';
import {setGithubUsername} from 'ActionCreators';

export default React.createClass({
	componentWillMount() {
		setGithubUsername('vigneshshanmugam');
	},
	render () {
		return <RouteHandler/>;
	}
});
