import keymirror from 'keymirror';

const ActionTypes = Object.freeze(keymirror({
	FETCH_USER_DATA: '',
	FETCH_USER_DATA_SUCCESS: '',
	FETCH_USER_DATA_ERROR: '',
	FETCH_REPO_DATA: '',
	FETCH_REPO_DATA_SUCCESS: '',
	FETCH_REPO_DATA_ERROR: ''
}));

export default ActionTypes;
