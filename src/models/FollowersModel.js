import { State } from 'phrontend';

let FollowersModel = State.extend({
	props: {
		login: 'string',
		avatar_url: 'string',
		html_url : 'string',
		repos_url : 'string',
	}
});

export default FollowersModel;