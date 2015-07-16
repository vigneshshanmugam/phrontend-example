import {Store} from 'phrontend';
import FollowersCollection from '../collection/FollowersCollection';
import actions from '../actions/ActionTypes';

import UsernameStore from './UsernameStore';

let FollowersStore = Store.create({
	collection: FollowersCollection,
	handler(payload) {
		if (payload.actionType === actions.FETCH_FOLLOWERS_DATA) {
			this.dispatcher.waitFor([UsernameStore.dispatchToken]);
			if(this._cache){
				this.emitChange();
			} else {
				fetch('https://api.github.com/users/' + UsernameStore.get('username') + '/followers')
					.then(r => r.json())
					.then(data => this.set(this.parse(data)) && this.emitChange())
					.catch(err => this.emitError(err));
			}
		}
	}
});

export default FollowersStore;
