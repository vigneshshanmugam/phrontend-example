import { State } from 'phrontend';

let UserModel = State.extend({
	props: {
		name: 'string',
		public_repos: 'number',
		url : 'string',
		company : 'string',
		email: 'string',
		location : 'string'
	}
});

export default UserModel;