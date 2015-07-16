import {Store} from 'phrontend';
import UserModel from '../models/UserModel';
import actions from '../actions/ActionTypes';

import UsernameStore from './UsernameStore';

let UserStore = Store.create({
	state: UserModel,
	handler(payload) {
		if (payload.actionType === actions.FETCH_USER_DATA) {
			this.dispatcher.waitFor([UsernameStore.dispatchToken]);
			fetch('https://api.github.com/users/' + UsernameStore.get('username'))
				.then(r => r.json())
				.then(data => this.set(this.parse(data)) && this.emitChange())
				.catch(err => this.emitError(err));
		}
	}
});

export default UserStore;
