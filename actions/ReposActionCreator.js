import { Dispatcher } from 'phrontend';
import Actions from './ActionTypes';

const ReposActionCreator = {
	fetchReposData(data) {
		Dispatcher.dispatch(Actions.FETCH_REPOS_DATA, data);
	},
	fetchReposDataSuccess(data) {
		Dispatcher.dispatch(Actions.FETCH_REPOS_DATA_SUCCESS, data);
	},
	fetchReposDataError(err) {
		Dispatcher.dispatch(Actions.FETCH_REPOS_DATA_ERROR, err);
	}
};

export default ReposActionCreator;