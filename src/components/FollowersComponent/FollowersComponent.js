import React from 'react';
import FollowersStore from 'FollowersStore';
import {fetchFollowersData} from 'ActionCreators';
import styles from './FollowersComponent.css';

export default React.createClass({
	getInitialState(){
		return { data: '' };
	},
	handleChange() {
		this.setState({ data : FollowersStore.get()});
	},
	handleError(err){
		console.log(err);
	},
	injectMetaTags() {
		let meta = document.getElementById('custom-meta');
		meta.setAttribute("content","All the Followers");
		document.title = "Followers Page";
	},
	componentDidMount() {
		FollowersStore.subscribe(this.handleChange, this.handleError);
		fetchFollowersData();
		this.injectMetaTags();
	},
	componentWillUnmount() {
		FollowersStore.unsubscribe(this.handleChange, this.handleError);
	},
	render() {
		if(!this.state.data) {
			return <div> Loading... </div>
		}
		return <div className={styles.followers}>
			{this.state.data.map(x => {
				return <div className={styles.follower}>
					<div className={styles.left}>
						<img className={styles.avatar} src={x.avatar_url} />
					</div>
					<div className={styles.right}>
						<p> Login Name - {x.login}</p>
						<p> URL - <a href={x.html_url}>{x.html_url}</a> </p>
						<p> Repos URL - <a href={x.repos_url}>{x.repos_url}</a> </p>
					</div>
				</div>
			})}
		</div>;
	}
});
