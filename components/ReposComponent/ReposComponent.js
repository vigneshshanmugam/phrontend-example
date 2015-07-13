import React from 'react';
import RepoStore from '../../store/RepoStore';
import ReposActionCreator from '../../actions/ReposActionCreator';
import styles from './ReposComponent.css';

export default React.createClass({
	getInitialState(){
		return {
			data : ""
		}
	},
	handleChange() {
		this.setState({ data : RepoStore.get()});
	},
	handleError(err){
		console.log(err);
	},
	componentDidMount() {
		RepoStore.subscribe(this.handleChange, this.handleError);
		ReposActionCreator.fetchReposData({
			username: 'vigneshshanmugam'
		});
	},
	componentWillUnmount() {
		RepoStore.unsubscribe(this.handleChange, this.handleError);
	},
	render() {
		if(!this.state.data) {
			return <div> Loading... </div>
		}
		return <div className={styles.repocontainer}>
			{this.state.data.map(x => {
				return <div className={styles.repos}>
					<h2 className={styles.name}> {x.name} </h2>
					<p> URL - <a href={x.url}>{x.url}</a> </p>
					<p> Language - {x.language} </p>
					<p> Open Issues - {x.open_issues} </p>
					<p> Forks - {x.forks} </p>
					<p> Watchers - {x.watchers} </p>
				</div>
			})}
		</div>;
	}
});

