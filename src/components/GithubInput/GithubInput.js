import React from 'react';
import {setGithubUsername, fetchUserData} from '../../actions/ActionCreators';

export default React.createClass({
	getInitialState() {
		return {
			username: this.props.username
		}
	},
	handleSubmit(e) {
		e.preventDefault();
		setGithubUsername(this.state.username);
		fetchUserData();
	},
	handleChange(e) {
		this.setState({ username: e.target.value });
	},
	render() {
		return <form onSubmit={this.handleSubmit}>
			<input value={this.state.username} onChange={this.handleChange}/>
			<input type='submit'/>
		</form>
	}
});
