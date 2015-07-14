import {Store} from 'phrontend';
import FollowersCollection from '../collection/FollowersCollection';
import FollowersActionCreator from '../actions/FollowersActionCreator';
import Actions from '../actions/ActionTypes';

let FollowersStore = Store.create({
	collection: FollowersCollection,
	handler(payload) {
		switch (payload.actionType) {
			case Actions.FETCH_FOLLOWERS_DATA:
			if(this._cache){
				this.emitChange();
			} else {
				fetch('https://api.github.com/users/' + payload.data.username + '/followers')
					.then(r => r.json())
					.then(FollowersActionCreator.fetchFollowersDataSuccess)
					.catch(FollowersActionCreator.fetchFollowersDataError);
			}	
			break;

			case Actions.FETCH_FOLLOWERS_DATA_SUCCESS:
			this.set(this.parse(payload.data));
			this.emitChange();
			break;

			case Actions.FETCH_FOLLOWERS_DATA_ERROR:
			throw payload.data;
			this.emitError(payload.data);
			break;
		}
	}
});

export default FollowersStore;
