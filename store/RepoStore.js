import {Store} from 'phrontend';
import RepoCollection from '../collection/RepoCollection';
import ReposActionCreator from '../actions/ReposActionCreator';
import Actions from '../actions/ActionTypes';

let RepoStore = Store.create({
	collection: RepoCollection,
	handler(payload) {
		switch (payload.actionType) {
			case Actions.FETCH_REPOS_DATA:
			if(this._cache){
				this.emitChange();
			} else {
				fetch('https://api.github.com/users/' + payload.data.username + '/repos')
					.then(r => r.json())
					.then(ReposActionCreator.fetchReposDataSuccess)
					.catch(ReposActionCreator.fetchReposDataError);
			}
			break;

			case Actions.FETCH_REPOS_DATA_SUCCESS:
			this.set(this.parse(payload.data));
			this._cache = true;
			this.emitChange();
			break;

			case Actions.FETCH_REPOS_DATA_ERROR:
			throw payload.data;
			this.emitError(payload.data);
			break;
		}
	}
});

export default RepoStore;
