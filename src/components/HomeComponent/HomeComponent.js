import React from 'react';
import {Link} from 'react-router';
import styles from './HomeComponent.css';
import GithubInput from '../GithubInput';
import UserComponent from '../UserComponent';
import UsernameStore from '../../store/UsernameStore';

let Item = React.createClass({
	render() {
		return <li className={styles.item}>
			<Link className={styles.links} to={this.props.to}>{this.props.children}</Link>
		</li>
	}
});

export default React.createClass({
	render(){
		return <div>
			<div>
				<GithubInput username={UsernameStore.get('username')}/>
			</div>
			<div>
				<UserComponent />
			</div>
			<ul>
				<Item to='repos'>Repos</Item>
				<Item to='followers'>Fans</Item>
			</ul>
		</div>
	}
});
