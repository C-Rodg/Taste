// Types
import { SET_JWT_TOKEN } from '../types';

// Initial State
const INITIAL_STATE = {
	jwtToken: null,
};

// JUST A DUMMY REDUCER FOR NOW
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_JWT_TOKEN:
			return {
				...state,
				jwtToken: action.payload,
			};
		default:
			return state;
	}
}
