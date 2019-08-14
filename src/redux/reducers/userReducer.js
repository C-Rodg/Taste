// Types
import { SET_USER_DATA } from '../types';

// Initial State
const INITIAL_STATE = {
	currentUser: 'blallala '
};

// JUST A DUMMY REDUCER FOR NOW
export default function(state = INITIAL_STATE, action) {
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
