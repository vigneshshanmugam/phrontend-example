import { State } from 'phrontend';

let RepoModel = State.extend({
	props: {
		name: 'string',
		full_name: 'string',
		url : 'string',
		size : 'number',
		language: 'string',
		open_issues : 'number',
		forks: 'number',
		watchers: 'number'
	}
});

export default RepoModel;