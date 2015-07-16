import { Dispatcher } from 'phrontend';
import Actions from './ActionTypes';

const FollowersActionCreator = {
	fetchFollowersData(data) {
		Dispatcher.dispatch(Actions.FETCH_FOLLOWERS_DATA, data);
	},
	fetchFollowersDataSuccess(data) {
		Dispatcher.dispatch(Actions.FETCH_FOLLOWERS_DATA_SUCCESS, data);
	},
	fetchFollowersDataError(err) {
		Dispatcher.dispatch(Actions.FETCH_FOLLOWERS_DATA_ERROR, err);
	}
};

export default FollowersActionCreator;