import {Store} from 'phrontend';
import UserModel from '../models/UserModel';
import UserActionCreator from '../actions/UserActionCreator';
import Actions from '../actions/ActionTypes';

let UserStore = Store.create({
	state: UserModel,
	handler(payload) {
		switch (payload.actionType) {
			case Actions.FETCH_USER_DATA:
			if(this._cache){
				this.emitChange();
			} else {
				fetch('https://api.github.com/users/' + payload.data.username )
					.then(r => r.json())
					.then(UserActionCreator.fetchUserDataSuccess)
					.catch(UserActionCreator.fetchUserDataError);
			}
			break;

			case Actions.FETCH_USER_DATA_SUCCESS:
			this.set(this.parse(payload.data));
			this.emitChange();
			break;

			case Actions.FETCH_USER_DATA_ERROR:
			throw payload.data;
			this.emitError(payload.data);
			break;
		}
	}
});

export default UserStore;
