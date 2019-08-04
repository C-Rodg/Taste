// Types
import { SET_USER_DATA } from '../types';

// Initial State
const INITIAL_STATE = {
	currentUser: null
};

export default function(state = INITIAL_STATE, action) {
	console.log(action.type);
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
}
