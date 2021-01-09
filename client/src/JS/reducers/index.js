import { combineReducers } from 'redux';
import { userReducer } from './user';
import { profileReducer } from './profile';
import { publicationReducer } from './Publication';
export const rootReducer = combineReducers({
	userReducer,
	profileReducer,
	publicationReducer,
});
