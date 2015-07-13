import keymirror from 'keymirror';

const ActionTypes = Object.freeze(keymirror({
	FETCH_USER_DATA: '',
	FETCH_USER_DATA_SUCCESS: '',
	FETCH_USER_DATA_ERROR: '',
	FETCH_REPOS_DATA: '',
	FETCH_REPOS_DATA_SUCCESS: '',
	FETCH_REPOS_DATA_ERROR: '',
	FETCH_FOLLOWERS_DATA: '',
	FETCH_FOLLOWERS_DATA_SUCCESS: '',
	FETCH_FOLLOWERS_DATA_ERROR: '',
}));

export default ActionTypes;
