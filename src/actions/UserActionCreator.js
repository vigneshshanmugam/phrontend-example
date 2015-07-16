import { Dispatcher } from 'phrontend';
import Actions from './ActionTypes';

const UserActionCreator = {
	fetchUserData(data) {
		Dispatcher.dispatch(Actions.FETCH_USER_DATA, data);
	},
	fetchUserDataSuccess(data) {
		Dispatcher.dispatch(Actions.FETCH_USER_DATA_SUCCESS, data);
	},
	fetchUserDataError(err) {
		Dispatcher.dispatch(Actions.FETCH_USER_DATA_ERROR, err);
	}
};

export default UserActionCreator;