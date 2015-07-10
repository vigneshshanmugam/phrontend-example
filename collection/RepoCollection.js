import { Collection } from 'phrontend';
import RepoModel from '../models/RepoModel';

let RepoColletion = Collection.extend({
	model: RepoModel
});

export default RepoColletion;