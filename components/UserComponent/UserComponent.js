import React from 'react';
import UserStore from '../../store/UserStore';
import UserActionCreator from '../../actions/UserActionCreator';

export default React.createClass({
	getInitialState(){
		return { loading: true };
	},
	handleChange() {
		let loading = false;
		this.setState(Object.assign({loading}, UserStore.get()));
	},
	handleError(err){
		console.log(err);
	},
	componentDidMount() {
		UserStore.subscribe(this.handleChange, this.handleError);
		UserActionCreator.fetchUserData({
			username: 'vigneshshanmugam'
		});
	},
	componentWillUnmount() {
		UserStore.unsubscribe(this.handleChange, this.handleError);
	},
	render() {
		if (this.state.loading) return <div>Loading...</div>;
		return <div>
			{this.state.name} - 
			{this.state.public_repos}
		</div>;
	}
});
