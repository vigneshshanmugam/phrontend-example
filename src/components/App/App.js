import React from 'react';
import {RouteHandler} from 'react-router';
import UsernameStore from '../../store/UsernameStore';
import {setGithubUsername} from '../../actions/ActionCreators';

export default React.createClass({
	componentWillMount() {
		setGithubUsername('vigneshshanmugam');
	},
	render () {
		return <RouteHandler/>;
	}
});
