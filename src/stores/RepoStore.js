import {Store} from 'phrontend';
import RepoCollection from '../collection/RepoCollection';
import actions from 'ActionTypes';

import UsernameStore from './UsernameStore';

let RepoStore = Store.create({
	collection: RepoCollection,
	handler(payload) {
		if (payload.actionType === actions.FETCH_REPOS_DATA) {
			this.dispatcher.waitFor([UsernameStore.dispatchToken]);
			if(this._cache){
				this.emitChange();
			} else {
				fetch('https://api.github.com/users/' + UsernameStore.get('username') + '/repos')
					.then(r => r.json())
					.then(data => this.set(this.parse(data)) && this.emitChange())
					.catch(err => this.emitError(err));
			}
		}
	}
});

export default RepoStore;
