import keymirror from 'keymirror';

const ActionTypes = Object.freeze(keymirror({
	FETCH_USER_DATA: '',
	FETCH_REPOS_DATA: '',
	FETCH_FOLLOWERS_DATA: '',
	SET_GITHUB_USERNAME: ''
}));

export default ActionTypes;
