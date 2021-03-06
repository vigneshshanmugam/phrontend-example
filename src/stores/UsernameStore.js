import {State, Store} from 'phrontend';
import actions from 'ActionTypes';

let UsernameStore = Store.create({
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

export default UsernameStore;
