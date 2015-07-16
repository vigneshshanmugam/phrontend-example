import React from 'react';
import {Link} from 'react-router';
import styles from './Page.css';

export default React.createClass({
	render(){
		return <div>
			Phrontend - Sample App
			<Link className={styles.links} to="user">User</Link>
			<Link className={styles.links} to="repos">Repos</Link>
			<Link className={styles.links} to="followers">Followers</Link>
		</div>
	}
});
