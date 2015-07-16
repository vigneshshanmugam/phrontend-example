import { Collection } from 'phrontend';
import FollowersModel from '../models/FollowersModel';

let FollowersColletion = Collection.extend({
	model: FollowersModel
});

export default FollowersColletion;