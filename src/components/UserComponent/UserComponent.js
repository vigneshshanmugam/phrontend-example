import React from 'react';
import UserStore from 'UserStore';
import {fetchUserData} from 'ActionCreators';

export default React.createClass({
	getInitialState() {
		return { loading: true };
	},
	handleChange({done}) {
		this.setState(Object.assign({loading: !done}, UserStore.get()));
	},
	handleError(err){
		console.log(err);
	},
	componentDidMount() {
		UserStore.subscribe(this.handleChange, this.handleError);
		fetchUserData();
	},
	componentWillUnmount() {
		UserStore.unsubscribe(this.handleChange, this.handleError);
	},
	render() {
		if (this.state.loading) return <div>Loading...</div>;
		return <div>
			<p> Name: {this.state.name} </p>
			<p> Company: {this.state.company} </p>
			<p> Location: {this.state.location} </p>
			<p> URL: {this.state.url} </p>
			<p> No of Repos: {this.state.public_repos} </p>
		</div>;
	}
});
