import {State, Store} from 'phrontend';
import actions from '../actions/ActionTypes';

let UserStore = Store.create({
	state: State.extend({
		props: {
			username: 'string'
		}
	}),
	handler(payload) {
		if (payload.actionType === actions.SET_GITHUB_USERNAME) {
			this.set({
				username: payload.data
			});
			this.emitChange();
		}
	}
});

export default UserStore;
