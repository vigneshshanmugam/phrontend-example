import {Dispatcher} from 'phrontend';
import actions from './ActionTypes';

function ActionCreatorCreator(action) {
	return function(...data) {
		Dispatcher.dispatch(actions[action], ...data);
	};
}

export const fetchUserData = ActionCreatorCreator(actions.FETCH_USER_DATA);
export const fetchReposData = ActionCreatorCreator(actions.FETCH_REPOS_DATA);
export const fetchFollowersData = ActionCreatorCreator(actions.FETCH_FOLLOWERS_DATA);
export const setGithubUsername = ActionCreatorCreator(actions.SET_GITHUB_USERNAME);
