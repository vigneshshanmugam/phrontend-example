import { State } from 'phrontend';

let ReposModel = State.extend({
	props: {
		name: 'string',
		public_repos: 'number',
		url : 'string',
		company : 'string',
		email: 'string',
		location : 'string'
	}
});

export defualt ReposModel;